import {Component, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app',
  template: `
    <h1 #title>{{message}}</h1>
    <input #message-input type="text" [value]="message" />
    <input type="button" value="change" (click)="changeMessage(messageInput.value)">
  `
})
class App {
  message:string = 'Hello World!';

  changeMessage(text:string) {
    this.message = text;
  }
}

bootstrap(App);