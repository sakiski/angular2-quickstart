import { Component } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

@Component({
  selector: 'my-app',
  directives: [CHART_DIRECTIVES],
  //template: '<h1>My First Angular 2 App</h1>'
  template: `
        <chart [options]="options"></chart>
    `
})
export class AppComponent { 
	constructor() {
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: Object;
}
