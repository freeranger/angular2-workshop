import {Component, bootstrap} from "angular2/angular2";
import MyAwesomeComponent from "./myAwesomeComponent"


@Component({
    selector: 'app',
    directives: [MyAwesomeComponent],
    template: `
        <h1>Pipes are the new filters</h1>
        <my-awesome-component></my-awesome-component>
    `
})
class App {
}

bootstrap(App).then(
    success => console.log("app starting..."),
    error => console.log(error)
);