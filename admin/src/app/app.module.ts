import {HomeAppModule} from './home-app/home-app.module';
import {ChangePasswordComponent} from './login-app/components/forgot-password/change-password.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LoginAppComponent} from './login-app/login-app.component';
import {LoginComponent} from './login-app/components/login/login.component';

import {AdminAppModule}from'./admin-app/admin-app.module';
import {ForgotPasswordComponent} from "./login-app/components/forgot-password/forgot-password.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found";
import {AppRoutingModule} from "./app.route";
import {loginAppRoutingModule} from "./login-app/login-app.route";
import {VerifyUserComponent} from './login-app/components/verifyUser.component';

@NgModule({
  imports: [BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    loginAppRoutingModule,
    AppRoutingModule,
    HomeAppModule
  ],
  declarations: [AppComponent,
    LoginAppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    VerifyUserComponent,
    ChangePasswordComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
