import {Component, bootstrap} from "angular2/angular2";
import MyAwesomeForm from "./myAwesomeForm";
@Component({
    selector: "app",
    directives: [MyAwesomeForm],
    template: `
        <my-awesome-form></my-awesome-form>
    `
})
class App {
}

bootstrap(App, []).then(
    success => console.log(`app started...`),
    error => console.log(error)
);