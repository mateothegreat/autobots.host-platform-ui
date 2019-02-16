import { Injectable } from '@angular/core';
import { Pageable }   from '@ngxux/common';
import { Observable } from 'rxjs';
import { APIClient }  from '../_lib/APIClient';
import { Bot }        from './bot';

@Injectable({
    providedIn: 'root'
})
export class BotsService extends APIClient<Bot> {

    public getPageable(): Observable<Pageable<Bot>> {

        return this._getPageable('bots');

    }

    public getByUUID(uuid: string): Observable<Bot> {

        return this.get(`bots/${ uuid }`);

    }

    public create(bot: Bot): Observable<Bot> {

        return this.post('bots', bot);

    }

    public update(uuid: string, bot: Bot): Observable<Bot> {

        return this.post(`bots/${ uuid }`, bot);

    }

    public deleteByUUID(uuid: string): Observable<boolean> {

        return this.delete(`bots/${ uuid }`);

    }
    
}
