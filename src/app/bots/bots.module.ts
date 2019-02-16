import { CommonModule }                        from '@angular/common';
import { NgModule }                            from '@angular/core';
import { RouterModule }                        from '@angular/router';
import { SharedModule }                        from '../shared/shared.module';
import { BotsDeployCreateInfoComponent }       from './bots-deploy/bots-deploy-create/bots-deploy-create-info/bots-deploy-create-info.component';
import { BotsDeployCreateRepositoryComponent } from './bots-deploy/bots-deploy-create/bots-deploy-create-repository/bots-deploy-create-repository.component';
import { BotsDeployCreateSettingsComponent }   from './bots-deploy/bots-deploy-create/bots-deploy-create-settings/bots-deploy-create-settings.component';
import { BotsDeployCreateComponent }           from './bots-deploy/bots-deploy-create/bots-deploy-create.component';
import { BotsDeployWidgetComponent }           from './bots-deploy/bots-deploy-widget/bots-deploy-widget.component';
import { BotsDeployComponent }                 from './bots-deploy/bots-deploy.component';
import { BotsSearchComponent }                 from './bots-search/bots-search.component';
import { BotsComponent }                       from './bots.component';

@NgModule({

    declarations: [

        BotsComponent,

        BotsDeployComponent,

        BotsSearchComponent,

        BotsDeployWidgetComponent,

        BotsDeployCreateComponent,

        BotsDeployCreateInfoComponent,

        BotsDeployCreateRepositoryComponent,

        BotsDeployCreateSettingsComponent

    ],

    imports: [

        CommonModule,
        SharedModule,
        RouterModule.forChild([

            {

                path: 'bots',
                component: BotsComponent,

                children: [

                    {

                        path: 'deploy',
                        component: BotsDeployComponent

                    }, {

                        path: 'deploy/:typeId',
                        component: BotsDeployCreateComponent

                    }, {

                        path: 'manage/:uuid',
                        component: BotsDeployCreateComponent

                    }, {

                        path: 'search',
                        component: BotsSearchComponent


                    }
                ]

            }

        ])

    ]

})
export class BotsModule {
}
