import {Component, Input} from 'angular2/angular2';
import {TitleService} from './title-service'

@Component({
  selector: 'my-title',
  template: `<h1>{{getCrazy(text)}}</h1>
    <p>{{titleService.title}}</p>
  `,
  providers: [TitleService]
})
export class Title {
  @Input() text = 'Hello World!';

  constructor(public titleService:TitleService) {

  }
  getCrazy(text) {
    return text.toLowerCase();
  }
}