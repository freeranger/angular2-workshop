import {Component, View} from "angular2/angular2";

@Component({
  selector: 'container',
  styles: [`
        .container{
            border: 10px dashed;
        }
    `],
  template: `
        <div class="container">
            <ng-content></ng-content>
        </div>
    `
})
export class Container {
  speak() {
    console.log("What do you want, child?");
  }
}

@Component({
  selector: 'child',
  template: `
        <div>I can talk to my parent</div>
    `
})
export class Child {
  constructor(container:Container) {
    container.speak();
  }
}