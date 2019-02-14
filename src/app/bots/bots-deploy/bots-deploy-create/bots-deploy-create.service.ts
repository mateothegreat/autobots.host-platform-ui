import { Injectable }                                                 from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Bot }                                                        from '../../bot';
import { BotsService }                                                from '../../bots.service';

@Injectable({
    providedIn: 'root'
})
export class BotsDeployCreateService {

    public bot: any;

    public formGroup: FormGroup = new FormGroup({

        status: new FormControl('ACTIVE', Validators.required),

        name: new FormControl('', [

            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)

        ]),

        description: new FormControl('', [

            Validators.minLength(4),
            Validators.maxLength(255)

        ]),

        environment: new FormArray([ this.getEnvironmentControl(), this.getEnvironmentControl() ])

    });

    public constructor(private formBuilder: FormBuilder,
                       private botsService: BotsService) {
    }

    public getEnvironmentControl(): FormGroup {

        return this.formBuilder.group({

            name: new FormControl(''),
            value: new FormControl(''),

        });

    }

    public create(): void {

        console.log(this.formGroup.value);

        this.botsService.create(this.formGroup.value).subscribe((bot: Bot) => {

            console.log(bot);

        });

    }

}

