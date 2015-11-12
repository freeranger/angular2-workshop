import {Pipe} from 'angular2/angular2';

@Pipe({
  name: 'simpleSearch',
  pure: false
})
export class SimpleSearch {
  transform(value, [term]:[string]) {
    return value.filter(function(item) {
      return item.title.includes(term);
    })
  }
}