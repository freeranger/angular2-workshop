import {Component, Output, EventEmitter} from "angular2/angular2";

@Component({
    selector: "my-awesome-component",
    template: `
        <button (click)="onClick($event)">Click me</button>
    `
})
export default class MyAwesomeComponent {
    i = 0;
    @Output() count = new EventEmitter();

    onClick(event) {
        console.log(`MyAwesomeComponent->onClick: ${event}`);
        this.count.next(this.i++);
    }
}