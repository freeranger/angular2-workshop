import {Component, bootstrap} from 'angular2/angular2';
import {Title} from './title';

@Component({
  selector: 'app',
  template: `
    <my-title></my-title>
  `,
  directives: [Title]
})
class App {}

bootstrap(App);