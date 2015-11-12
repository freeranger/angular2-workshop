import {Component, NgFor} from 'angular2/angular2';
import {Http} from 'angular2/http';

//a simple type for our Person in the people.json
type Person = {
    firstName:string,
    lastName:string,
    favoriteFruit:string
}

@Component({
    selector: 'app',
    directives: [NgFor],
    template: `
    <h1>People</h1>

      <div *ng-for="#person of people">
        Hello, {{person.firstName}} {{person.lastName}}!
        Would you like a {{person.favoriteFruit}}?
      </div>

  `
})
export default class HttpDemo {
    people:Person[];

    constructor(http:Http) {
        http.get('./people.json')
            .map(res => res.json())
            .subscribe(res => this.people = res);
    }
}