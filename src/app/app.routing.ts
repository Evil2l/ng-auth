import { RouterModule, Routes } from '@angular/router';
import {ProtectedComponent} from "./protected/protected.component";
import {SigninComponent} from "./unprotected/signin.component";
import {SignupComponent} from "./unprotected/signup.component";
import {AuthGuard} from "./shared/auth.guard";


const routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'protected', component: ProtectedComponent,canActivate: [AuthGuard]},
];

export const routing = RouterModule.forRoot(routes);
