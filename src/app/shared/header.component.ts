import {Component, OnDestroy} from "@angular/core";
import {AuthService} from "./auth.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'my-header',
    template: `
       
        <header>
            <nav class="navbar navbar-dark bg-inverse">

            <ul class="nav navbar-nav">
                <li class="nav-item" routerLinkActive="active">
                  <a [routerLink]="['/signin']" class="nav-link" href="#">Sign Up <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item" routerLinkActive="active">
                  <a class="nav-link" [routerLink]="['/signup']" href="#">Sign In</a>
                </li>
                <li class="nav-item" routerLinkActive="active">
                  <a class="nav-link" [routerLink]="['/protected']" href="#">Protected</a>
                </li>
                
            </ul>
            
            <ul class="nav navbar-nav float-xs-right">

                <li class="nav-item">
                    <a class="nav-link" *ngIf="isLoged()" (click)="logout()">Logout</a>
                </li>
            </ul>
        
            </nav>
        
        </header>
    `
})
export class HeaderComponent implements OnDestroy{
    isAuth = false;
    private subscription: Subscription;

    constructor(private authService: AuthService){
        this.subscription = authService.isAuthenticated().subscribe(
            authStatus => this.isAuth = authStatus
        );
    }

    isLoged(){
        return this.isAuth;
    }

    logout(){
        this.authService.logout();
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
