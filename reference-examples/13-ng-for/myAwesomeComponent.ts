import {Component, NgFor} from "angular2/angular2";


@Component({
    selector: "my-awesome-component",
    directives: [NgFor],
    template: `
        <div>
            <ul>
                <li *ng-for="#person of people">
                    {{person}}
                </li>
            </ul>
        </div>
    `
})
export default class MyAwesomeComponent {
    people:string[] = ["John", "Mindy", "Ben", "Sally", "Scott", "Mary"];
}