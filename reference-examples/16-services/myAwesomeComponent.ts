import {Component, NgFor, provide, Inject, Injectable, FORM_DIRECTIVES} from "angular2/angular2";

class Stuff {
    people:string[] = ["Jack", "Jill", "Susan"];
}

class MoreStuff {
    message:string = Math.random().toString();
}
let shareStuff:MoreStuff = new MoreStuff();


@Component({
    //using a Class to bind to a value
    providers: [Stuff, provide(MoreStuff, {useValue:shareStuff})],
    selector: "my-awesome-component",
    directives: [NgFor, FORM_DIRECTIVES],

    template: `
        <div *ng-for="#person of people">{{person}}</div>
        <input type="text" [(ng-model)]="note.message">
    `
})
export class MyAwesomeComponent {
    people:string[];
    note:MoreStuff;

    //using TypeScript for the lookup
    constructor(stuff:Stuff, moreStuff:MoreStuff) {
        this.people = stuff.people;
        this.note = moreStuff;
    }
}

@Component({
    //using a string to bind to a value
    providers: [provide('foo', {useValue:shareStuff})],
    selector: "my-other-awesome-component",
    directives: [FORM_DIRECTIVES],
    template: `
        <div>
            <input type="text" [(ng-model)]="note.message">
        </div>
    `
})
export class MyOtherAwesomeComponent {
    note;
    //using @Inject and a string lookup
    constructor(@Inject('foo') moreStuff) {
        this.note = moreStuff;
    }
}

