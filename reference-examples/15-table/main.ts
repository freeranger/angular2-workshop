import {Component, bootstrap, provide} from "angular2/angular2";
import MyAwesomeComponent from "./myAwesomeComponent"
import people from "./people";

@Component({
    selector: 'app',
    directives: [MyAwesomeComponent],
    template: `
        <h1></h1>
        <my-awesome-component></my-awesome-component>
    `
})
class App {
}

bootstrap(App, [
    provide('people', {useValue: people})
]).then(
    success => console.log("app starting..."),
    error => console.log(error)
);