import {Component, View, bootstrap} from "angular2/angular2";
import {OneAwesomeComponent, TwoAwesomeComponent, ThreeAwesomeComponent} from "./myAwesomeComponent"
import {POSTAL_PROVIDERS} from "./postalService"

@Component({
    selector: 'app',
    directives: [OneAwesomeComponent, TwoAwesomeComponent, ThreeAwesomeComponent],
    template: `
        <one-awesome-component></one-awesome-component>
        <two-awesome-component></two-awesome-component>
        <three-awesome-component></three-awesome-component>
    `
})
class App {
}

bootstrap(App, [POSTAL_PROVIDERS]).then(
    success => console.log("app starting..."),
    error => console.log(error)
);