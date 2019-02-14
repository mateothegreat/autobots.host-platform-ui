import { Component }               from '@angular/core';
import { BotsDeployCreateService } from '../bots-deploy-create.service';

@Component({
    selector: 'app-bots-deploy-create-repository',
    templateUrl: './bots-deploy-create-repository.component.html',
    styleUrls: [ './bots-deploy-create-repository.component.scss' ]
})
export class BotsDeployCreateRepositoryComponent {

    public constructor(public botsDeployCreateService: BotsDeployCreateService) {

    }

}
