import { Injectable }            from '@angular/core';
import { ReplaySubject }         from 'rxjs';
import * as SockJS               from 'sockjs-client';
import * as Stomp                from 'stompjs';
import { environment }           from '../../environments/environment';
import { AuthenticationService } from './AuthenticationService';
import { Message }               from './Message';
import { MessageType }           from './MessageType';

@Injectable({
    providedIn: 'root'
})
export class MessagingService {

    private stompClient;

    public isConnected: boolean;
    public queue$: ReplaySubject<Array<Message>> = new ReplaySubject();
    public queue: Array<Message> = [];

    public constructor(private authenticationService: AuthenticationService) {

        this.connect();

    }

    public connect() {

        let ws = new SockJS(`${ environment.MESSAGING_BASE }/socket?token=${ AuthenticationService.getToken() }`);

        this.stompClient = Stomp.over(ws);
        this.stompClient.debug = () => {
        };

        this.stompClient.connect({

            Authorization: `Bearer ${ AuthenticationService.getToken() }`

        }, this.onConnect, this.onError);

    }

    public onError = (error: string) => {

        console.error(`Error: ${ error }`);

        this.isConnected = false;

        setTimeout(this.connect, 5000);

    };

    private disconnected(error: any): void {

        console.log(error);

        this.isConnected = false;

    }

    public onConnect = () => {

        console.log('stompclient.connect()');

        this.isConnected = true;

        // setTimeout(() => {
        //
        //     if (this.isConnected) {
        //
        //         this.send(new Message('TEST', new Date().toISOString()));
        //         this.send(new Message('DISCONNECT', new Date().toISOString()));
        //
        //     } else {
        //
        //         console.log('Not connected :(');
        //
        //     }
        //
        // }, 3000);

        this.stompClient.subscribe('/topic/reply', (message) => this.receive);

        this.stompClient.subscribe('/topic/test@test.com', (message) => {

            console.log(message);

            this.receive(message);

        });


        this.stompClient.subscribe('/topic/error', (message) => this.receiveError);

        this.send(new Message({

            type: MessageType.CAMERA_RECORDING_START,
            payload: JSON.stringify({ a: 123, b: { c: 444, d: 'asdf' } }),

        }));

    };

    public changeStatus(connected: boolean): void {

        // this.connected = connected;

    }

    public send(message: Message): void {

        this.stompClient.send('/app/message', {}, JSON.stringify(message));

    }

    public receive(payload: any): void {

        this.queue.push(new Message(JSON.parse(payload.body)));
        this.queue.reverse();

        this.queue$.next(this.queue);

    }

    public receiveError(payload: any): void {

        console.log(payload);

    }

}
