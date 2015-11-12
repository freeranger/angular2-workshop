import {Component, NgStyle} from "angular2/angular2";

@Component({
    selector: "my-awesome-component",
    directives: [NgStyle],
    template: `
        <div [ng-style]="boxStyle"></div>
    `
})
export default class MyAwesomeComponent {
    colors = ["blue", "green", "red", "purple"];

    //ng-style takes an object that defines styles (camelCased)
    boxStyle = {
        backgroundColor: "blue",
        width: "100px",
        height: "100px"
    };

    randomBackground = ()=>
        this.boxStyle.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    randomWidth = ()=> this.boxStyle.width = Math.random() * 100 + "px";
    randomHeight = ()=> this.boxStyle.height = Math.random() * 100 + "px";

    onInit() {
        setInterval(this.randomBackground, 100);
        setInterval(this.randomWidth, 100);
        setInterval(this.randomHeight, 100);
    }
}