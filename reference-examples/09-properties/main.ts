import {Component, bootstrap} from "angular2/angular2";
import MyAwesomeComponent from "./myAwesomeComponent"


@Component({
    selector: 'app',
    directives: [MyAwesomeComponent],
    template: `
        <h1>Properties push data in to components</h1>
        <my-awesome-component [message]="appMessage" id="whatAmI"></my-awesome-component>
    `
})
class App {
    appMessage = "sup?";

    constructor(){
        let i = 0;
        setInterval(()=> this.appMessage = i++, 1000);
    }
}

bootstrap(App);