import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router }                                  from '@angular/router';
import { Pageable }                                from '@ngxux/common';
import { NgxuxDatatableComponent }                 from '@ngxux/datatable';
import { Subscription }                            from 'rxjs';
import { Bot }                                     from '../bot';
import { BotsService }                             from '../bots.service';

@Component({
    selector: 'app-bots-search',
    templateUrl: './bots-search.component.html',
    styleUrls: [ './bots-search.component.scss' ]
})
export class BotsSearchComponent implements OnInit, OnDestroy {

    @ViewChild(NgxuxDatatableComponent) public datatableRef: NgxuxDatatableComponent<Bot>;

    private subscription: Subscription;

    public constructor(private botsService: BotsService,
                       private router: Router) {

        botsService.getPageable().subscribe((pageable: Pageable<Bot>) => {

            console.log(pageable);

        });

    }

    public ngOnInit(): void {

        this.datatableRef.clicks$.subscribe(bot => {

            if (bot.uuid) {
                this.router.navigate([ `/bots/manage/${ bot.uuid }` ]);
            }

        });

        this.subscription = this.botsService.getPageable().subscribe((pageable: Pageable<Bot>) => {

            console.log(pageable);

            this.datatableRef.setPage(pageable);

        });

    }

    public ngOnDestroy(): void {

        this.subscription.unsubscribe();

    }

}
