import {Directive, Component, bootstrap} from "angular2/angular2";

@Directive({
    selector: '[simple]',
    properties: [
        'simple'
    ],
    host: {
        '(mouseover)': 'onMouseover()',
    }
})
class SimpleDirective {
    simple;

    onMouseover() {
        console.log('mousing over');
        console.log(this.simple);
    }
}


@Component({
    selector: "app",
    directives: [SimpleDirective],
    template: `
        <div simple="party time!!">Hello world</div>
    `
})
class App {
}

bootstrap(App, []).then(
    success => console.log(`app started...`),
    error => console.log(error)
);

//more here: https://angular.io/docs/js/latest/api/core/DirectiveMetadata-class.html