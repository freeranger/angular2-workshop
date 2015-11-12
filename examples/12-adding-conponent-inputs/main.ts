import {Component, bootstrap} from 'angular2/angular2';
import {Title} from './title';

@Component({
  selector: 'app',
  template: `
    <my-title text="This is configured title"></my-title>
    <my-title text="Woowooo"></my-title>
    <my-title></my-title>
    <my-title [text]="title"></my-title>
  `,
  directives: [Title]
})
class App {
  title = 'Some message that is a property'
}

bootstrap(App);