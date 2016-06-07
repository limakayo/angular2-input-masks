import { Component, OnInit } from '@angular/core';
import { Currency } from './currency';

@Component({
  selector: 'my-app',
  template: `
  <h1>Angular 2 Input Masks</h1>
  <my-mask [(ngModel)]="value"></my-mask>
  `,
  directives: [ Currency ]
})
export class AppComponent {
  value:any = '12345678910123465';
}
