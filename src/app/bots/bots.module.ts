import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { BotsComponent } from './bots.component';

@NgModule({

    declarations: [

        BotsComponent

    ],

    imports: [

        CommonModule,

        RouterModule.forChild([

            {

                path: 'bots',
                component: BotsComponent

            }
          
        ])

    ]

})
export class BotsModule {
}
