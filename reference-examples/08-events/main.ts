import {Component, bootstrap} from "angular2/angular2";
import MyAwesomeComponent from "./myAwesomeComponent"

@Component({
    selector: 'app',
    directives: [MyAwesomeComponent],
    template: `
        <h1>Events push data out of components</h1>
        <my-awesome-component (count)="onCount($event)"></my-awesome-component>
    `
})
class App {
    onCount(event) {
        console.log(`App->onCount: ${event}`);
    }
}

bootstrap(App);