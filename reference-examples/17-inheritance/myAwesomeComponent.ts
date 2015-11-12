import {Component, NgFor, Inject, Injectable, FORM_DIRECTIVES} from "angular2/angular2";
//we pick a random number just to prove it's the same instance
class Stuff {
    aNumber:number = Math.random();
}


@Component({
    selector: "my-other-awesome-component",
    directives: [FORM_DIRECTIVES],
    template: `
        <div>
            {{stuff.aNumber}}
        </div>
    `
})
export class MyChildComponent {
    stuff;

    constructor(stuff:Stuff) {
        this.stuff = stuff;
    }
}

@Component({
    providers: [Stuff],
    selector: "my-awesome-component",
    directives: [NgFor, FORM_DIRECTIVES, MyChildComponent],
    template: `
        {{aNumber}}
        <my-other-awesome-component></my-other-awesome-component>
    `
})
export default class MyAwesomeComponent {
    aNumber;

    constructor(stuff:Stuff) {
        this.aNumber = stuff.aNumber;
    }

}


