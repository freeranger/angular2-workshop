import {Component, bootstrap} from 'angular2/angular2';
import {Announcer} from './announcer';

@Component({
  selector: 'app',
  template: `
    {{notification}}
    <announcer (notify)="onNotify($event)"></announcer>
  `,
  directives: [Announcer]
})
class App {
  notification:string = '';
  onNotify(somethingMoreToYourLiking) {
    this.notification = somethingMoreToYourLiking;
  }
}

bootstrap(App);