import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import {ProtectedComponent} from "./protected/protected.component";
import {SigninComponent} from "./unprotected/signin.component";
import {SignupComponent} from "./unprotected/signup.component";


import { ApiService } from './shared';
import {AuthService} from "./shared/auth.service";

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import {AuthGuard} from "./shared/auth.guard";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ProtectedComponent,
    SigninComponent,
    SignupComponent
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
