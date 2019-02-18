import * as moment     from 'moment';
import { Moment }      from 'moment';
import { MessageType } from './MessageType';

export class Message {

    public type?: MessageType;
    public context?: string;
    public payload?: string;
    public message?: string;
    public uuid?: string;
    public stampCreated?: Moment;

    public timeAgo?: string;

    public constructor(obj?: {

        type?: MessageType,
        context?: any,
        message?: any,
        payload?: any,
        uuid?: string
        stampCreated?: string

    }) {

        this.context = obj.context;
        this.message = obj.message;
        this.type = obj.type;
        this.payload = obj.payload;
        this.uuid = obj.uuid;
        this.stampCreated = moment(obj.stampCreated);

        this.timeAgo = this.stampCreated.fromNow();
    }

}
