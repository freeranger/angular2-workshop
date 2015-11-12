import {Component, View, NgFor, Inject, Injectable} from "angular2/angular2";
import {Mailman} from "./postalService";


@Component({
    selector: "one-awesome-component",
    template: ``
})
export class OneAwesomeComponent {
    constructor(mailman:Mailman) {
        console.log("one", mailman.message, mailman.deliveryTime);
    }
}

@Component({
    selector: "two-awesome-component",
    template: ``
})
export class TwoAwesomeComponent {
    constructor(mailman:Mailman) {
        console.log("two", mailman.message, mailman.deliveryTime);
    }
}

@Component({
    selector: "three-awesome-component",
    template: ``
})
export class ThreeAwesomeComponent {
    constructor(mailman:Mailman) {
        console.log("three", mailman.message, mailman.deliveryTime);
    }
}


