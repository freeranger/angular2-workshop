import {message, sayHello} from './other-module';

console.log('this is my message: ', message);

sayHello(message);

//destructuring

let person = {
  name: 'Joel',
  email: 'joel@egghead.io'
};

let {name} = person;

console.log(name);

