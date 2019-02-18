import { Component }                                                   from '@angular/core';
import { Router }                                                      from '@angular/router';
import { NgxuxMatDialogService }                                       from '@ngxux/ngxux-mat-dialog';
import { NgxuxMatToolbarItem, NgxuxMatToolbarService }                 from '@ngxux/ngxux-mat-toolbar';
import { NgxuxMatVerticalToolbarItem, NgxuxMatVerticalToolbarService } from '@ngxux/ngxux-mat-vertical-toolbar';
import { AuthenticationService }                                       from './_lib/AuthenticationService';
import { MessagingService }                                            from './_lib/MessagingService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public constructor(public authenticationService: AuthenticationService,
                       private ngxuxMatVerticalToolbarService: NgxuxMatVerticalToolbarService,
                       private ngxuxMatDialogService: NgxuxMatDialogService,
                       private ngxuxMatToolbarService: NgxuxMatToolbarService,
                       private router: Router,
                       private messagingService: MessagingService) {

        ngxuxMatToolbarService.menuItems = [

            new NgxuxMatToolbarItem({ icon: 'home', path: '/home', tooltip: 'Go home!', color: '#fff', hoverColor: 'red' }),
            new NgxuxMatToolbarItem({ icon: 'settings', path: '/settings', tooltip: 'Go settings!' }),

        ];

        ngxuxMatVerticalToolbarService.leftMenuItems = [

            new NgxuxMatVerticalToolbarItem({ icon: 'home', path: '/home', tooltip: 'Go home!' }),
            new NgxuxMatVerticalToolbarItem({ icon: 'bug_report', path: '/bots', tooltip: 'Manage Bots..' }),
            new NgxuxMatVerticalToolbarItem({ icon: 'settings', path: '/settings', tooltip: 'Go settings!' }),

        ];

        ngxuxMatVerticalToolbarService.click$.subscribe((item: NgxuxMatVerticalToolbarItem) => {

            this.router.navigate([ item.path ]);

        });

    }

}
