import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', canActivate: [ LoginGuard ], component: HomeComponent },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [ LoginGuard ]
})
export class AppRouting {}
