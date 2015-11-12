export class Mailman {
    deliveryTime:number = Math.random();
    message:string = "You've got mail"
}


export const POSTAL_PROVIDERS = [
    Mailman
];