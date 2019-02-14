import { Component }               from '@angular/core';
import { NgxuxMatHeaderNavButton } from '@ngxux/ngxux-mat-header-nav/lib/ngxux-mat-header-nav-button';

@Component({
    selector: 'app-bots',
    templateUrl: './bots.component.html',
    styleUrls: [ './bots.component.scss' ]
})
export class BotsComponent {

    public onHeaderNavButtonClick(e: NgxuxMatHeaderNavButton): void {

        console.log(e.label);

    }

}
