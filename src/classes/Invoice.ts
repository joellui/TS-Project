import {HasFormatter} from '../interfaces/HasFormatter.js'

//class
export class Invoice implements HasFormatter {
    //readonly client: string;
    //private details: string;
    //public amount: number;

    constructor(//c: string,d:string,a:number
        readonly client: string,
        private details: string,
        public amount: number,
        ){
        //this.client = c;
        //this.details = d;
        //this.amount = a;
    }

    format(){
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}