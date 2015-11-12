//basic destructuring
let person = {
    name: "John",
    email: "foo@example.com"
};

let {name} = person;
console.log(name);

//importing is just like destructuring
import {message} from "./other-stuff";

console.log(message);