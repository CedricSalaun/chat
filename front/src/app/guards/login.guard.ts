import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LoginGuard implements CanActivate {
    
    constructor(private router: Router) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.token$.pipe(
            map((result) => {
                if (result) { this.router.navigate([ '/home' ]); }
            return true;
        })
        ).pipe(catchError(() => {
            this.router.navigate([ '/login' ]);
            return Observable.throw(false)
        }));
    }
}
