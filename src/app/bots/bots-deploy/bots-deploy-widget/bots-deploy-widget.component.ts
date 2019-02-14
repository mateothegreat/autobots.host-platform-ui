import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';
import { BotDeploy }        from '../bot-deploy';

@Component({
    selector: 'app-bots-deploy-widget',
    templateUrl: './bots-deploy-widget.component.html',
    styleUrls: [ './bots-deploy-widget.component.scss' ]
})
export class BotsDeployWidgetComponent {

    @Input() public botDeploy: BotDeploy;

    public constructor(private router: Router) {

    }

    public onClick(): void {

        this.router.navigate([ `/bots/deploy/${ this.botDeploy.id }` ]);

    }

}
