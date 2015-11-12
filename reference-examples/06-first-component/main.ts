import {Component, bootstrap} from "angular2/angular2";

@Component({
    selector: 'app',
    template: `
        <div>This is an app</div>
    `
})
class App {
}

bootstrap(App).then(
    success => console.log("app running"),
    error => console.log(error)
);

//let annotations = Reflect.getMetadata("annotations", App);
//console.log(annotations);
