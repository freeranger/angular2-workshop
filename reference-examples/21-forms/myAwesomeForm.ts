import {Component, FORM_PROVIDERS, FORM_DIRECTIVES, FormBuilder, Validators, NgFor} from "angular2/angular2";

@Component({
    providers: [FORM_PROVIDERS],
    selector: 'my-awesome-form',
    directives: [FORM_DIRECTIVES, NgFor],
    template: `
        <div>I'm a sweet form</div>
        <form #sweet="form" [ng-form-model]="form" (ng-submit)="onSubmit()">
            <input ng-control="firstName" type="text" name="" id="">
            <p></p>
            <input type="number" id="amount" ng-control="amount">
            <p></p>
            <select id="country" ng-control="country">
                <option *ng-for="#c of countries" [value]="c">{{c}}</option>
            </select>
            <p></p>
            <button type="submit" [disabled]="!sweet.form.valid">Submit</button>
        </form>
    `
})
export default class MyAwesomeForm {
    form;
    countries = ["Algeria", "Canada", "Spain", "Turkey"];

    constructor(fb:FormBuilder) {
        this.form = fb.group({
            "firstName": ["", Validators.required],
            "amount": [0],
            "country": [this.countries[0], Validators.required],
        });
    }

    onSubmit() {
        console.log(this.form.value);
    }
}

//alternative with heavy `ng-model` use:
//https://github.com/angular/angular/blob/master/modules/examples/src/template_driven_forms/index.ts