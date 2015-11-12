import {Component, View} from "angular2/angular2";
import {RouteParams} from "angular2/router";

@Component({
    selector: 'admin',
    template: `
        <div>{{user}} has logged in</div>
    `
})
export default class Admin {
    user;

    constructor(route:RouteParams) {
        this.user = route.get('user');
    }
}
