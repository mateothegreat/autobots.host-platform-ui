import { Injectable }                                                 from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router }                                                     from '@angular/router';
import { ToastrService }                                              from 'ngx-toastr';
import { Bot }                                                        from '../../bot';
import { BotEnvironment }                                             from '../../bot-environment';
import { BotsService }                                                from '../../bots.service';

@Injectable({
    providedIn: 'root'
})
export class BotsDeployCreateService {

    public bot: any;

    public formGroup: FormGroup = new FormGroup({

        status: new FormControl('ACTIVE', Validators.required),

        gitUrl: new FormControl('', Validators.required),

        name: new FormControl('', [

            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)

        ]),

        description: new FormControl('', [

            Validators.minLength(4),
            Validators.maxLength(255)

        ]),

        environments: new FormArray([])

    });

    public constructor(private formBuilder: FormBuilder,
                       private botsService: BotsService,
                       private router: Router,
                       private toastrService: ToastrService) {
    }

    public reset(bot?: Bot): void {

        this.bot = bot;

        if (bot) {

            this.formGroup.get('status').setValue(bot.status);
            this.formGroup.get('gitUrl').setValue(bot.gitUrl);
            this.formGroup.get('name').setValue(bot.name);
            this.formGroup.get('description').setValue(bot.description);

            bot.environments.forEach(env => {

                (this.formGroup.get('environments') as FormArray).push(this.getEnvironmentControl(env));

            });

        }

    }


    public getEnvironmentControl(env?: BotEnvironment): FormGroup {

        return this.formBuilder.group({

            name: new FormControl(env ? env.name : ''),
            value: new FormControl(env ? env.value : ''),

        });

    }

    public create(): void {

        if (this.bot) {

            this.botsService.update(this.bot.uuid, this.formGroup.value).subscribe((bot: Bot) => {

                this.toastrService.success('Your changes have been saved');

            });

        } else {

            this.botsService.create(this.formGroup.value).subscribe((bot: Bot) => {

                this.router.navigate([ `/bots/${ bot.uuid }` ]);

                this.toastrService.success(`Your bot ${ bot.name } has been created!`);

            });


        }

    }

    public delete(): void {

        this.botsService.deleteByUUID(this.bot.uuid).subscribe((result: boolean) => {

            this.router.navigate([ '/bots' ]);

            this.toastrService.success(`Your bot ${ this.bot.name } has been deleted!`);

        });

    }

}

