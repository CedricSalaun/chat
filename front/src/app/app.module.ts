import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRouting
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
