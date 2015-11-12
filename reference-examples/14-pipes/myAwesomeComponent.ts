import {Component, NgFor, Pipe} from "angular2/angular2";

@Pipe({name: 'sPipe'})
class SPipe {
    transform =
        value => value.filter(
            item=> item.startsWith("S")
        );
}


@Component({
    selector: "my-awesome-component",
    directives: [NgFor],
    pipes: [SPipe],
    template: `
        {{"you don't need to shout!" | uppercase}}
        <div>
            <ul>
                <li *ng-for="#person of people | sPipe">
                    {{person}}
                </li>
            </ul>
        </div>
    `
})
export default class MyAwesomeComponent {
    people:string[] = ["John", "Mindy", "Ben", "Sally", "Scott", "Mary"];
}