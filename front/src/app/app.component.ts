import { Component, ElementRef, NgZone, Renderer2, ViewChild } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
      <router-outlet #loadingElement></router-outlet>`
})
export class AppComponent {
    @ViewChild('loadingElement') public readonly loadingElement: ElementRef;

    constructor(private readonly _router: Router,
                private readonly _renderer: Renderer2,
                private readonly _ngZone: NgZone) {
        _router.events.subscribe((event: RouterEvent) => { this._navigationInterceptor(event); });
    }

    private _navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this._ngZone.runOutsideAngular(() => {
                this._renderer.setStyle(this.loadingElement.nativeElement, 'opacity', '0');
                this._renderer.setStyle(this.loadingElement.nativeElement, 'transition', 'opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1)');
            });
        }
        if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
            this._ngZone.runOutsideAngular(() => {
                this._renderer.setStyle(this.loadingElement.nativeElement, 'opacity', '1');
                this._renderer.setStyle(this.loadingElement.nativeElement, 'transition', 'opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1)');
            });
        }
    }
}
