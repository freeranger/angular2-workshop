import {Component, Input} from 'angular2/angular2';

@Component({
  selector: 'my-title',
  template: `<h1>{{getCrazy(text)}}</h1>`
})
export class Title {
  @Input() text = 'Hello World!';

  getCrazy(text) {
    return text.toLowerCase();
  }
}