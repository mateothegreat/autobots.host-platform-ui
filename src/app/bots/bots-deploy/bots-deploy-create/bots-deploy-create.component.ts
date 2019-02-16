import { Component }               from '@angular/core';
import { ActivatedRoute }          from '@angular/router';
import { BotsDeployCreateService } from './bots-deploy-create.service';

@Component({
    selector: 'app-bots-deploy-create',
    templateUrl: './bots-deploy-create.component.html',
    styleUrls: [ './bots-deploy-create.component.scss' ]
})
export class BotsDeployCreateComponent {

    public constructor(private route: ActivatedRoute,
                       public botsDeployCreateService: BotsDeployCreateService) {

        route.params.subscribe((params: any) => {

            if (!params.uuid) {

                botsDeployCreateService.reset();

            }

        });

    }

}
