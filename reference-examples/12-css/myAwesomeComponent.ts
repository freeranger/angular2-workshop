import {Component, NgClass} from "angular2/angular2";


@Component({
    selector: "my-awesome-component",
    directives: [NgClass],
    styles: [
        `
            .heavy{
                font-family: Georgia,serif;
                font-weight: bold;
                background-color: aqua;
            }
            .light{
                font-family: Arial,serif;
                font-weight: normal;
                background-color: antiquewhite;
            }
        `
    ],
    template: `
        <div
            [ng-class]="compClass"
            (mouseover)="onMouseover()"
            (mouseout)="onMouseout()"
            >
                Hello Friends!
        </div>
    `
})
export default class MyAwesomeComponent {
    compClass = "light";
    onMouseover = ()=> this.compClass = "heavy";
    onMouseout = ()=> this.compClass = "light";
}