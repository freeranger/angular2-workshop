import {Component, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'app',
  template: `
    <div *ng-for="#person of people">{{person}}</div>  `,
  directives: [NgFor]
})
class App {
  people = ['Homer', 'Lucy', 'Fred', 'Maria', 'Tom'];
}

bootstrap(App);