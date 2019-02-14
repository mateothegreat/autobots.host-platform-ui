import { Component }               from '@angular/core';
import { BotsDeployCreateService } from '../bots-deploy-create.service';

@Component({
    selector: 'app-bots-deploy-create-info',
    templateUrl: './bots-deploy-create-info.component.html',
    styleUrls: [ './bots-deploy-create-info.component.scss' ]
})
export class BotsDeployCreateInfoComponent {

    public constructor(public botsDeployCreateService: BotsDeployCreateService) {

    }

}
