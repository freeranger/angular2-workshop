import {Component, Input, EventEmitter, Attribute, SimpleChange} from "angular2/angular2";

@Component({
    selector: "my-awesome-component",
    template: `
        <button (click)="onClick($event)">Toggle</button>
        <div [hidden]="isHidden" (message-change)="onMessageChange()">The message from the app is: {{message}}</div>
    `
})
export default class MyAwesomeComponent {
    @Input() message;
    isHidden;

    constructor(@Attribute('id') id:string) {
        //@Attribute can grab default strings
        console.log(`id: ${id}`);
        console.log(`constructor this.message: ${this.message}`);
    }

    //onInit is a "LifeCycle hook"
    //For example, `this.message` wouldn't be set in the constructor
    onInit() {
        console.log(`onInit this.message: ${this.message}`);
    }

    onClick() {
        this.isHidden = !this.isHidden;
    }

    //onChanges is a LifeCycle hook where you can watch property changes
    //coming in to your Component
    onChanges({message}:SimpleChange) {
        console.log(`onChanges message was: ${message.previousValue} now is: ${message.currentValue}`);
    }
}