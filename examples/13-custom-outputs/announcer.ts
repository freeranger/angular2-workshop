import {Component, Output, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'announcer',
  template: `<button (click)="onClick()">Click Me</button>`
})
export class Announcer {
  @Output() notify = new EventEmitter();

  onClick() {
    this.notify.next(Math.random());
  }
}