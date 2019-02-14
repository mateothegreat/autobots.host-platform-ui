import { Component } from '@angular/core';
import { BotDeploy } from './bot-deploy';

@Component({
    selector: 'app-bots-deploy',
    templateUrl: './bots-deploy.component.html',
    styleUrls: [ './bots-deploy.component.scss' ]
})
export class BotsDeployComponent {

    public botDeploymentTypes: Array<BotDeploy> = [

        {
            id: 'git',
            name: 'git',
            description: 'Deploy from a public git repository.',
            image: '/assets/logos/git.png'

        }

    ];

}
