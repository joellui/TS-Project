import {HasFormatter} from '../interfaces/HasFormatter.js'

//class
export class Payment implements HasFormatter {
    //readonly client: string;
    //private details: string;
    //public amount: number;

    constructor(//c: string,d:string,a:number
        readonly recipient: string,
        private details: string,
        public amount: number,
        ){
        //this.client = c;
        //this.details = d;
        //this.amount = a;
    }

    format(){
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}