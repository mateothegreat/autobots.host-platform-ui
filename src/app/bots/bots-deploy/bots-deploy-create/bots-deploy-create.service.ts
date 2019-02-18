import { Injectable }                                                 from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router }                                                     from '@angular/router';
import { ToastrService }                                              from 'ngx-toastr';
import { Bot }                                                        from '../../bot';
import { BotEnvironment }                                             from '../../bot-environment';
import { BotImage }                                                   from '../../bot-image';
import { BotsService }                                                from '../../bots.service';

@Injectable({
    providedIn: 'root'
})
export class BotsDeployCreateService {

    public bot: any;

    public botImages: Array<BotImage> = [ {

        id: 'NODE_11_9_0_ALPINE',
        image: 'node:11.9.0-alpine',
        name: 'Node.js 11.9.0 Alpine',
        description: 'Node.js version 11.9.0 running on Alpine Linux'

    }, {

        id: 'NODE_8_15_0_ALPINE',
        image: 'node:8.15.0-alpine',
        name: 'Node.js 8.15.0 Alpine',
        description: 'Node.js version 8.15.0 running on Alpine Linux'

    }, {

        id: 'PYTHON_3_7_2_ALPINE',
        image: 'python:3.7.2-alpine',
        name: 'Python 3.7.2 Alpine',
        description: 'Python version 3.7.2 running on Alpine Linux'

    }, {

        id: 'PYTHON_2_7_15_ALPINE',
        image: 'python:2.7.15-alpine',
        name: 'Python 2.7.15 Alpine',
        description: 'Python version 2.7.15 running on Alpine Linux'

    } ];

    public formGroup: FormGroup = new FormGroup({

        status: new FormControl('ACTIVE', Validators.required),
        image: new FormControl('ACTIVE', Validators.required),
        name: new FormControl('', [

            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)

        ]),
        repoVisibility: new FormControl('Public', Validators.required),
        gitUrl: new FormControl('', Validators.required),
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

        this.formGroup = new FormGroup({

            status: new FormControl('ACTIVE', Validators.required),
            image: new FormControl('ACTIVE', Validators.required),
            name: new FormControl('', [

                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(255)

            ]),
            repoVisibility: new FormControl('Public', Validators.required),
            gitUrl: new FormControl('', Validators.required),
            description: new FormControl('', [

                Validators.minLength(4),
                Validators.maxLength(255)

            ]),
            environments: new FormArray([])

        });
        
        this.bot = bot;

        if (bot) {

            this.formGroup.get('status').setValue(bot.status);
            this.formGroup.get('gitUrl').setValue(bot.gitUrl);
            this.formGroup.get('name').setValue(bot.name);
            this.formGroup.get('image').setValue(bot.image);
            this.formGroup.get('description').setValue(bot.description);

            bot.environments.forEach(env => {

                (this.formGroup.get('environments') as FormArray).push(this.getEnvironmentControl(env));

            });

            (this.formGroup.get('environments') as FormArray).push(this.getEnvironmentControl());

        } else {

            (this.formGroup.get('environments') as FormArray).push(this.getEnvironmentControl());
            (this.formGroup.get('environments') as FormArray).push(this.getEnvironmentControl());

        }

    }


    public getEnvironmentControl(env?: BotEnvironment): FormGroup {

        return this.formBuilder.group({

            name: new FormControl(env ? env.name : ''),
            value: new FormControl(env ? env.value : ''),

        });

    }

    public removeEnv(index: number): void {

        (this.formGroup.get('environments') as FormArray).removeAt(index);

    }

    public create(): void {

        console.log(this.formGroup.value);

        if (this.bot) {

            this.botsService.update(this.bot.uuid, this.formGroup.value).subscribe((bot: Bot) => {

                this.toastrService.success('Your changes have been saved');

            });

        } else {

            this.botsService.create(this.formGroup.value).subscribe((bot: Bot) => {

                this.router.navigate([ `/bots/manage/${ bot.uuid }` ]);

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

