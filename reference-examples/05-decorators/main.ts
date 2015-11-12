function hi({person}) {
    return function (target, key, descriptor) {
        //console.log("target:", target); //the Class
        //console.log("key:", key); //the name of the function
        //console.log("descriptor:", descriptor); //the function definition
        //target[key](); //would invoke sendLetter
        let originalFunction = descriptor.value;
        descriptor.value = function () {
            originalFunction(...arguments);
            console.log(`you hacked into the ${key} function`);
            originalFunction(person);
        };

        return descriptor;
    }
}

function deliverFood({foodType}) {
    return function (target) {
        //console.log("target:", target); //the Class
        target.foodType = foodType;
        return target;
    }
}

@deliverFood({foodType: "pizza"})
class PostOffice {
    static foodType;

    @hi({person: "Hacker"})
    readLetter(person:string) {
        console.log(`Dear ${person},`);
    }

    deliverPizza() {
        if (PostOffice.foodType) {
            console.log(`delivering ${PostOffice.foodType}`);
        }
    }
}

let postOffice = new PostOffice();
postOffice.readLetter("John");
postOffice.deliverPizza();



