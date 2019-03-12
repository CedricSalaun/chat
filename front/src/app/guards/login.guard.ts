import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LoginGuard implements CanActivate {

    public constructor(private readonly _router: Router) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.token$.pipe(
            map((result: any) => {
                if (result) { return this._router.navigate([ '/home' ]); }
                return true;
            }),
            catchError((error: any, caught: Observable<boolean>) => {
                this._router.navigate([ '/login' ]);
                return caught;
            })
        );
    }
}
