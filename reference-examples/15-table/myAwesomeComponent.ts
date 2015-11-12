import {Component, Inject, NgFor, Pipe, FORM_DIRECTIVES} from "angular2/angular2";

//type aliases (TypeScript only) are unnecessary,
//but will be a big help in future tooling for templates
type Person = {
    firstName:string,
    lastName:string,
    age:number
}
type People = Person[];

@Pipe({name: 'simpleOrderBy'})
class SimpleOrderBy {
    //order 1 = asc, -1 = desc
    transform(value, [key, order]:[string, string]) {
        return value.sort(function (a, b) {
            if (a[key] > b[key]) return order;
            if (a[key] < b[key]) return order * -1;
            return 0;
        });
    }

}

@Pipe({name: 'simpleSearch'})
class SimpleSearch {
    transform(value, [term, fields]) {
        term = term.toLowerCase();
        return value.filter(function (item) {
            return fields.some(function (key) {
                return item[key].toLowerCase().includes(term);
            });
        });
    }

}


@Component({
    selector: "my-awesome-component",
    directives: [NgFor, FORM_DIRECTIVES],
    pipes: [SimpleOrderBy, SimpleSearch],
    template: `
        <div>
            <input type="text" [(ng-model)]="term">
            <table>
                <thead>
                    <th (click)="selectColumn('firstName')">First</th>
                    <th (click)="selectColumn('lastName')">Last</th>
                    <th (click)="selectColumn('age')">Age</th>
                </thead>
                <!-- the () indicates a 'grouping' when you have multiple filters. This won't be necessary soon.-->
                <tr *ng-for="#person of (people | simpleSearch:term:searchFields) | simpleOrderBy:column:order">
                    <td>{{person.firstName}}</td>
                    <td>{{person.lastName}}</td>
                    <td>{{person.age}}</td>
                </tr>
            </table>
        </div>
    `
})
export default class MyAwesomeComponent {
    order:number = 1;
    column:string = "age";

    term:string = "";
    searchFields:string[] = ['firstName', 'lastName'];

    constructor(
        @Inject('people') public people:People
    ) {
    }

    selectColumn(column){
        if(this.column === column && this.order == 1) {
            this.order = -1;
        }else{
            this.order = 1;
        }

        this.column = column;
    }
}