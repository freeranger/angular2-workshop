import {Component, bootstrap} from "angular2/angular2";
import {MyAwesomeComponent, MyOtherAwesomeComponent} from "./myAwesomeComponent"


@Component({
    selector: 'app',
    directives: [MyAwesomeComponent, MyOtherAwesomeComponent],
    template: `
        <h1></h1>
        <my-awesome-component></my-awesome-component>
        <my-other-awesome-component></my-other-awesome-component>
    `
})
class App {
}

bootstrap(App).then(
    success => console.log("app starting..."),
    error => console.log(error)
);