let isDone:boolean = false;

let height:number = 10;

let name:string = 'John';

let afewnumbers:Array<number> = [1, 2, 3];

enum Color {Red, Green, Blue}

console.log(Color.Green); //logs 1

let doWhatever:any = 1;
doWhatever = "hi";
doWhatever = false;

let things:any[] = [1, "hi", true];


function dontReturnAnything():void {
    console.log("this is what void is for");
}

dontReturnAnything();


class Example {
    afield;

    constructor(public shorthand) {
        //no need for this.shorthand = shorthand
    }
}
