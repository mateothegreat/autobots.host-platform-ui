import { Component, OnInit } from '@angular/core';
import { Pageable }          from '@ngxux/common';
import { Bot }               from '../bot';
import { BotsService }       from '../bots.service';

@Component({
    selector: 'app-bots-search',
    templateUrl: './bots-search.component.html',
    styleUrls: [ './bots-search.component.scss' ]
})
export class BotsSearchComponent implements OnInit {

    public constructor(private botsService: BotsService) {

        botsService.getPageable().subscribe((pageable: Pageable<Bot>) => {

            console.log(pageable);

        });

    }

    ngOnInit() {
    }

}
