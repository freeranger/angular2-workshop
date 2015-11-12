import {Component, View, bootstrap} from "angular2/angular2";
import {Container, Child} from "./container";
@Component({
    selector: "app",
    directives: [Container, Child],
    template: `
        <container>
            <child></child>
        </container>
    `
})
class App {
    speak() {
        console.log('talk to me!');
    }
}

bootstrap(App, []).then(
    success => console.log(`app started...`),
    error => console.log(error)
);