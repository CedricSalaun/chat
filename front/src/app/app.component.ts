import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <router-outlet #loadingElement></router-outlet>`,
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    @ViewChild('loadingElement') public readonly loadingElement: ElementRef;
}
