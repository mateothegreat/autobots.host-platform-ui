import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule }                            from '@angular/core';
import { BrowserModule }                       from '@angular/platform-browser';
import { BrowserAnimationsModule }             from '@angular/platform-browser/animations';
import { RouterModule }                        from '@angular/router';
import { NgProgressModule }                    from '@ngx-progressbar/core';
import { NgProgressHttpModule }                from '@ngx-progressbar/http';
import { ToastrModule }                        from 'ngx-toastr';
import { HttpErrorInterceptor }                from './_lib/HttpErrorInterceptor';
import { JwtInterceptor }                      from './_lib/JwtInterceptor';
import { AppComponent }                        from './app.component';
import { BotsModule }                          from './bots/bots.module';
import { HomeModule }                          from './home/home.module';
import { LoginModule }                         from './login/login.module';
import { SettingsModule }                      from './settings/settings.module';
import { SharedModule }                        from './shared/shared.module';

@NgModule({
    declarations: [

        AppComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot([]),

        BotsModule,
        HomeModule,
        LoginModule,
        SettingsModule,
        SharedModule,

        NgProgressModule.withConfig({

            thick: true,
            color: 'yellow',
        }),

        NgProgressHttpModule,

        ToastrModule.forRoot({

            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            enableHtml: true,
            closeButton: true

        }),

    ],

    providers: [

        {

            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,

        }, {

            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true,

        },

    ],

    bootstrap: [ AppComponent ]

})
export class AppModule {
}
