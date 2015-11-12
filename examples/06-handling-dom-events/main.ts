import {Component, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app',
  template: `
    <h1>Hello World!</h1>
    <input type="text" on-click="onClick()" (input)="onInput($event.target.value)" />
  `
})
class App {
  onInput(txt) {
    console.log(txt);
  }
  onClick() {
    console.log('CLICK!!!');
  }
}

bootstrap(App);