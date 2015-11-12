import {Component, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app',
  template: `
    <h1 (click)="onClick()" [hidden]="hidden">Hello World!</h1>
    <input type="button" (click)="onClick()" [value]="hidden ? 'show' : 'hide'" />
  `
})
class App {
  hidden:boolean = false;

  onClick() {
    console.log('CLICK!!!');
    this.hidden = !this.hidden;
  }
}

bootstrap(App);