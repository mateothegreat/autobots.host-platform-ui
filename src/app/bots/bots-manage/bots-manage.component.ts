import { Component }               from '@angular/core';
import { ActivatedRoute }          from '@angular/router';
import { ToastrService }           from 'ngx-toastr';
import { Bot }                     from '../bot';
import { BotsDeployCreateService } from '../bots-deploy/bots-deploy-create/bots-deploy-create.service';
import { BotsService }             from '../bots.service';

@Component({
    selector: 'app-bots-manage',
    templateUrl: './bots-manage.component.html',
    styleUrls: [ './bots-manage.component.scss' ]
})
export class BotsManageComponent {

    public bot: Bot;

    public constructor(private botsService: BotsService,
                       private route: ActivatedRoute,
                       private botsDeployCreateService: BotsDeployCreateService,
                       private toastrService: ToastrService) {

        route.params.subscribe((params: any) => {

            botsService.getByUUID(params.uuid).subscribe((bot: Bot) => {

                console.log(bot);

                this.bot = bot;

                botsDeployCreateService.reset(bot);

            });

        });

    }

    public onRedeployClick(): void {

        this.botsService.deployByUUID(this.bot.uuid).subscribe((result: boolean) => {

            if (result) {

                this.toastrService.success(`Your bot "${ this.bot.name }" has been queued for deployment!`);

            } else {

                this.toastrService.error(`Your bot "${ this.bot.name }" could not be queued for deployment! Please try again in a moment..`);

            }

        });

    }

}
