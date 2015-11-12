import {Component, FORM_DIRECTIVES} from "angular2/angular2";

@Component({
    selector: "my-awesome-component",
    directives: [FORM_DIRECTIVES],
    template: `
        <div>
            <input type="text" [(ng-model)]="something">
            {{something}}
        </div>
    `
})
export default class MyAwesomeComponent {
    something = "";
    interrupt = ()=> this.something = "Were you trying to type something?";

    onInit() {
        setInterval(this.interrupt, 5000)
    }
}