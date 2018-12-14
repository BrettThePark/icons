import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgProgressIconsService {
    constructor() { }
}
NgProgressIconsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NgProgressIconsService.ctorParameters = () => [];
/** @nocollapse */ NgProgressIconsService.ngInjectableDef = defineInjectable({ factory: function NgProgressIconsService_Factory() { return new NgProgressIconsService(); }, token: NgProgressIconsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgProgressIconsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgProgressIconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'progress-ng-progress-icons',
                template: `
    <p>
      ng-progress-icons works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
NgProgressIconsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class BatteryComponent {
    constructor() {
        this.percent = 100;
        this.size = 24;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    rangeValue(value, min, max) {
        return Math.max(min, Math.min(value, max));
    }
}
BatteryComponent.decorators = [
    { type: Component, args: [{
                selector: 'battery-progress',
                template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path [attr.fill]="color || 'currentColor'" fill-opacity="0.3" d="M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z"/>
      <clipPath id="pxb-battery-clip">
        <path overflow="visible" d="M20,8.33C20,7.6,19.4,7,18.67,7H3.34C2.6,7,2,7.6,2,8.33v7.33C2,16.4,2.6,17,3.33,17h15.34C19.4,17,20,16.4,20,15.67V8.33z"/>
      </clipPath> 
      <rect [attr.fill]="color || 'currentColor'" x="2" y="7" clip-path="url(#pxb-battery-clip)" [attr.width]="rangeValue(percent/100*18, 0, 100)" height="10" />
    </svg>
  `,
                styles: [],
                inputs: ['percent', 'size', 'color']
            },] },
];
/** @nocollapse */
BatteryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HeartComponent {
    constructor() {
        this.percent = 100;
        this.size = 24;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    rangeValue(value, min, max) {
        return Math.max(min, Math.min(value, max));
    }
}
HeartComponent.decorators = [
    { type: Component, args: [{
                selector: 'heart-progress',
                template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path [attr.fill]="color || 'currentColor'" fill-opacity="0.3" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      <clipPath id="pxb-heart-clip">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </clipPath>
      <rect [attr.fill]="color || 'currentColor'" clip-path="url(#pxb-heart-clip)" x="2" [attr.y]="21.35-(rangeValue(percent,0,100))*18.35/100" width="20" height="20" />
    </svg>
  `,
                styles: [],
                inputs: ['percent', 'size', 'color']
            },] },
];
/** @nocollapse */
HeartComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PieComponent {
    constructor() {
        this.percent = 100;
        this.size = 24;
        this.ring = 10;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
    }
    /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    rangeValue(value, min, max) {
        return Math.max(min, Math.min(value, max));
    }
    /**
     * @param {?} percent
     * @return {?}
     */
    getCoordinates(percent) {
        /** @type {?} */
        const radius = 12;
        /** @type {?} */
        const degrees = percent * 3.6;
        return {
            x: radius + (radius * Math.cos((Math.PI / 180) * (degrees))),
            y: radius + (radius * Math.sin((Math.PI / 180) * (degrees)))
        };
    }
}
PieComponent.decorators = [
    { type: Component, args: [{
                selector: 'pie-progress',
                template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="transform: rotate(-.25turn)">
      <clipPath [attr.id]="'pxb-donut-clip-'+stroke">
        <path [attr.d]="'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,' + (20-stroke) +'A' + (20-2*stroke)/2 + ',' + (20-2*stroke)/2 + ',0,1,1,' + (22-stroke) + ',12,' + (20-2*stroke)/2 + ',' + (20-2*stroke)/2 + ',0,0,1,12,' + (22-stroke) + 'Z'"/>
      </clipPath>
      <circle [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" cx="12" cy="12" r="10" [attr.fill]="color || 'currentColor'" [attr.fill-opacity]="percent >= 100 ? '1' : '0.3'"></circle>
      <path *ngIf="rangeValue(percent, 0, 100) > 0 && rangeValue(percent, 0, 100) < 100" [attr.fill]="color || 'currentColor'" [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" [attr.d]="'M 12,12 H 24 A 12,12,0,'+(rangeValue(percent, 0, 100)>=50?1:0)+',1,'+getCoordinates(rangeValue(percent, 0, 100))['x']+','+getCoordinates(rangeValue(percent, 0, 100))['y']+'Z'" />
    </svg>
  `,
                styles: [],
                inputs: ['percent', 'size', 'color', 'ring']
            },] },
];
/** @nocollapse */
PieComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgProgressIconsModule {
}
NgProgressIconsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [NgProgressIconsComponent, BatteryComponent, HeartComponent, PieComponent],
                exports: [
                    NgProgressIconsComponent,
                    BatteryComponent, HeartComponent, PieComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgProgressIconsService, NgProgressIconsComponent, NgProgressIconsModule, BatteryComponent, HeartComponent, PieComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHhibHVlLW5nLXByb2dyZXNzLWljb25zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi9uZy1wcm9ncmVzcy1pY29ucy5zZXJ2aWNlLnRzIiwibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi9uZy1wcm9ncmVzcy1pY29ucy5jb21wb25lbnQudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL2hlYXJ0L2hlYXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvcGllL3BpZS5jb21wb25lbnQudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL25nLXByb2dyZXNzLWljb25zLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nUHJvZ3Jlc3NJY29uc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm9ncmVzcy1uZy1wcm9ncmVzcy1pY29ucycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZy1wcm9ncmVzcy1pY29ucyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdQcm9ncmVzc0ljb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JhdHRlcnktcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgPHBhdGggW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIGZpbGwtb3BhY2l0eT1cIjAuM1wiIGQ9XCJNMjAsMTBWOC4zQzIwLDcuNiwxOS40LDcsMTguNyw3SDMuM0MyLjYsNywyLDcuNiwyLDguM3Y3LjNDMiwxNi40LDIuNiwxNywzLjMsMTdoMTUuM2MwLjcsMCwxLjMtMC42LDEuMy0xLjNWMTRoMnYtNEgyMHpcIi8+XG4gICAgICA8Y2xpcFBhdGggaWQ9XCJweGItYmF0dGVyeS1jbGlwXCI+XG4gICAgICAgIDxwYXRoIG92ZXJmbG93PVwidmlzaWJsZVwiIGQ9XCJNMjAsOC4zM0MyMCw3LjYsMTkuNCw3LDE4LjY3LDdIMy4zNEMyLjYsNywyLDcuNiwyLDguMzN2Ny4zM0MyLDE2LjQsMi42LDE3LDMuMzMsMTdoMTUuMzRDMTkuNCwxNywyMCwxNi40LDIwLDE1LjY3VjguMzN6XCIvPlxuICAgICAgPC9jbGlwUGF0aD4gXG4gICAgICA8cmVjdCBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgeD1cIjJcIiB5PVwiN1wiIGNsaXAtcGF0aD1cInVybCgjcHhiLWJhdHRlcnktY2xpcClcIiBbYXR0ci53aWR0aF09XCJyYW5nZVZhbHVlKHBlcmNlbnQvMTAwKjE4LCAwLCAxMDApXCIgaGVpZ2h0PVwiMTBcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJ11cbn0pXG5leHBvcnQgY2xhc3MgQmF0dGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBlcmNlbnQ6bnVtYmVyID0gMTAwO1xuICBzaXplOm51bWJlciA9IDI0O1xuICBjb2xvcjpzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICByYW5nZVZhbHVlKHZhbHVlLCBtaW4sIG1heCl7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbixNYXRoLm1pbih2YWx1ZSxtYXgpKVxuICB9XG5cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFydC1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICA8cGF0aCBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgZmlsbC1vcGFjaXR5PVwiMC4zXCIgZD1cIk0xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1elwiLz5cbiAgICAgIDxjbGlwUGF0aCBpZD1cInB4Yi1oZWFydC1jbGlwXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXpcIi8+XG4gICAgICA8L2NsaXBQYXRoPlxuICAgICAgPHJlY3QgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIGNsaXAtcGF0aD1cInVybCgjcHhiLWhlYXJ0LWNsaXApXCIgeD1cIjJcIiBbYXR0ci55XT1cIjIxLjM1LShyYW5nZVZhbHVlKHBlcmNlbnQsMCwxMDApKSoxOC4zNS8xMDBcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50Om51bWJlciA9IDEwMDtcbiAgc2l6ZTpudW1iZXIgPSAyNDtcbiAgY29sb3I6c3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcmFuZ2VWYWx1ZSh2YWx1ZSwgbWluLCBtYXgpe1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sTWF0aC5taW4odmFsdWUsbWF4KSlcbiAgfVxuXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGllLXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFthdHRyLmhlaWdodF09XCJzaXplKydweCdcIiBbYXR0ci53aWR0aF09XCJzaXplKydweCdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cInRyYW5zZm9ybTogcm90YXRlKC0uMjV0dXJuKVwiPlxuICAgICAgPGNsaXBQYXRoIFthdHRyLmlkXT1cIidweGItZG9udXQtY2xpcC0nK3N0cm9rZVwiPlxuICAgICAgICA8cGF0aCBbYXR0ci5kXT1cIidNMTIsMkExMCwxMCwwLDEsMCwyMiwxMiwxMCwxMCwwLDAsMCwxMiwyWm0wLCcgKyAoMjAtc3Ryb2tlKSArJ0EnICsgKDIwLTIqc3Ryb2tlKS8yICsgJywnICsgKDIwLTIqc3Ryb2tlKS8yICsgJywwLDEsMSwnICsgKDIyLXN0cm9rZSkgKyAnLDEyLCcgKyAoMjAtMipzdHJva2UpLzIgKyAnLCcgKyAoMjAtMipzdHJva2UpLzIgKyAnLDAsMCwxLDEyLCcgKyAoMjItc3Ryb2tlKSArICdaJ1wiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8Y2lyY2xlIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBbYXR0ci5maWxsLW9wYWNpdHldPVwicGVyY2VudCA+PSAxMDAgPyAnMScgOiAnMC4zJ1wiPjwvY2lyY2xlPlxuICAgICAgPHBhdGggKm5nSWY9XCJyYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCkgPiAwICYmIHJhbmdlVmFsdWUocGVyY2VudCwgMCwgMTAwKSA8IDEwMFwiIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCIgW2F0dHIuZF09XCInTSAxMiwxMiBIIDI0IEEgMTIsMTIsMCwnKyhyYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCk+PTUwPzE6MCkrJywxLCcrZ2V0Q29vcmRpbmF0ZXMocmFuZ2VWYWx1ZShwZXJjZW50LCAwLCAxMDApKVsneCddKycsJytnZXRDb29yZGluYXRlcyhyYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCkpWyd5J10rJ1onXCIgLz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdyaW5nJ11cbn0pXG5leHBvcnQgY2xhc3MgUGllQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDpudW1iZXIgPSAxMDA7XG4gIHNpemU6bnVtYmVyID0gMjQ7XG4gIGNvbG9yOnN0cmluZztcbiAgcmluZzpudW1iZXIgPSAxMDtcbiAgc3Ryb2tlOm51bWJlcjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0cm9rZSA9IE1hdGgubWF4KDEsTWF0aC5taW4oMTAsIE1hdGgucm91bmQodGhpcy5yaW5nKSkpO1xuICB9XG4gIHJhbmdlVmFsdWUodmFsdWUsIG1pbiwgbWF4KXtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLE1hdGgubWluKHZhbHVlLG1heCkpXG4gIH1cbiAgZ2V0Q29vcmRpbmF0ZXMocGVyY2VudCl7XG4gICAgY29uc3QgcmFkaXVzID0gMTI7XG4gICAgY29uc3QgZGVncmVlcyA9IHBlcmNlbnQqMy42O1xuICAgIHJldHVybiB7XG4gICAgICB4OiByYWRpdXMgKyAocmFkaXVzICogTWF0aC5jb3MoIChNYXRoLlBJLzE4MCkgKiAoZGVncmVlcykpKSxcbiAgICAgIHk6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLnNpbiggKE1hdGguUEkvMTgwKSAqIChkZWdyZWVzKSkpXG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nOyAgXG5pbXBvcnQgeyBOZ1Byb2dyZXNzSWNvbnNDb21wb25lbnQgfSBmcm9tICcuL25nLXByb2dyZXNzLWljb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXR0ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9iYXR0ZXJ5L2JhdHRlcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9oZWFydC9oZWFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGllQ29tcG9uZW50IH0gZnJvbSAnLi9waWUvcGllLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdQcm9ncmVzc0ljb25zQ29tcG9uZW50LCBCYXR0ZXJ5Q29tcG9uZW50LCBIZWFydENvbXBvbmVudCwgUGllQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIE5nUHJvZ3Jlc3NJY29uc0NvbXBvbmVudCwgXG4gICAgQmF0dGVyeUNvbXBvbmVudCwgSGVhcnRDb21wb25lbnQsIFBpZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nUHJvZ3Jlc3NJY29uc01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFPRSxpQkFBaUI7OztZQUxsQixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7QUNKRDtJQWFFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTthQUNYOzs7Ozs7Ozs7QUNWRDtJQW9CRTt1QkFIaUIsR0FBRztvQkFDTixFQUFFO0tBRUM7Ozs7SUFFakIsUUFBUTtLQUNQOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN4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