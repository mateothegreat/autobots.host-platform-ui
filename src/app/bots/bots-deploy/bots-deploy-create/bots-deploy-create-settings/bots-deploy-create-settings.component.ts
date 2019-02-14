import { Component }               from '@angular/core';
import { BotsDeployCreateService } from '../bots-deploy-create.service';

@Component({
    selector: 'app-bots-deploy-create-settings',
    templateUrl: './bots-deploy-create-settings.component.html',
    styleUrls: [ './bots-deploy-create-settings.component.scss' ]
})
export class BotsDeployCreateSettingsComponent {

    public constructor(public botsDeployCreateService: BotsDeployCreateService) {

    }

}
