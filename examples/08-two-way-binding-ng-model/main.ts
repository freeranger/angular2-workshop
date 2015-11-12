import {Component, bootstrap, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'app',
  template: `
    <h1>{{message}}</h1>
    <input type="text" [value]="message" (input)="onInput($event.target.value)" />
    <hr>
    <input type="text" [ng-model]="message" />
  `,
  directives: [FORM_DIRECTIVES]
})
class App {
  message:string = 'Hello World!';
  onInput(text) {
    this.message = text;
  }
}

bootstrap(App);