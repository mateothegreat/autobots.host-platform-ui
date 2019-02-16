import { Component, OnInit }       from '@angular/core';
import { NgxuxMatHeaderNavButton } from '@ngxux/ngxux-mat-header-nav/lib/ngxux-mat-header-nav-button';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    public onHeaderNavButtonClick(e: NgxuxMatHeaderNavButton) {


    }
  
}
