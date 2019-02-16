import { Component }               from '@angular/core';
import { Router }                  from '@angular/router';
import { NgxuxMatHeaderNavButton } from '@ngxux/ngxux-mat-header-nav/lib/ngxux-mat-header-nav-button';

@Component({
    selector: 'app-bots',
    templateUrl: './bots.component.html',
    styleUrls: [ './bots.component.scss' ]
})
export class BotsComponent {

    public constructor(private router: Router) {

    }

    public onHeaderNavButtonClick(e: NgxuxMatHeaderNavButton): void {

        if (e.label === 'Add Bot..') {

            this.router.navigate([ '/bots/deploy/git' ]);

        }

    }

}
