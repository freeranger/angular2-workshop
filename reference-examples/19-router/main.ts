import {provide, Component, View, bootstrap} from "angular2/angular2";
import {ROUTER_PROVIDERS, Route, HashLocationStrategy, LocationStrategy, Router, RouterLink, RouteConfig, RouterOutlet} from "angular2/router";

import Home from "./home/home";
import Admin from "./admin/admin";

@RouteConfig([
    new Route({path: '/', component: Home, as: 'Home'}),
    new Route({path: '/admin/:user', component: Admin, as: 'Admin', params: {user: "John"}})
])
@Component({
    selector: "app",
    directives: [RouterOutlet, RouterLink],
    template: `
        <nav>
            <a [router-link]="['/Home']">Home</a>
            <a [router-link]="['/Admin', {'user':'John'}]">Admin</a>
        </nav>
        <main>
            <router-outlet></router-outlet>
        </main>
    `
})
class App {
}

bootstrap(App, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
])
    .then(
        success => console.log(`app started...`),
        error => console.log(error)
    );