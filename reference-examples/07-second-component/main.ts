import {Component, bootstrap} from "angular2/angular2";
import MyAwesomeComponent from "./myAwesomeComponent"


@Component({
    selector: 'app',
    directives: [MyAwesomeComponent],
    template: `
        <my-awesome-component></my-awesome-component>
    `
})
class App {
}

bootstrap(App);