// //interface 
// interface IsPerson{
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number; 
// }
// const me: IsPerson = {
//     name: 'joel',
//     age: 30,
//     speak(text: string): void{
//         console.log(text);
//     },
//     spend(amount: number): number{
//         console.log('I spent', amount);
//         return amount;
//     }
// };
// console.log(me);
import { Payment } from './classes/Payment.js';
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi','web work',250);
// docTwo = new Payment('mario', 'plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('mario','workd on the mario website',250);
// const invTwo = new Invoice('luigi','work on the luigi website',300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client,inv.amount,inv.format());
// });
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, detail.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//Generics 
// const addUID = <T extends object>(obj: T )=> {
//     let uid = Math.floor(Math.random()*100);
//     return {...obj,uid};
// }
// let docOne = addUID ({name:'yoshi', age: 40});
// console.log(docOne);
//with interfaces 
// interface Resourse <T>{
//     uid: number;
//     resourseName: string;
//     data: T;
// }
// const docThree: Resourse<object>= {
//     uid: 1,
//     resourseName: 'person',
//     data: {name: 'shaun'}
// }
//ENUMS
// enum ResourseType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// interface Resourse<T>{
//     uid: number;
//     resourseType: number;
//     data: T;
// }
// const docOne: Resourse<object>={
//     uid: 1,
//     resourseType: ResourseType.BOOK,
//     data: {name: 'yoshi'}
// }
// const docTwo: Resourse<object>={
//     uid: 10,
//     resourseType: ResourseType.PERSON,
//     data: {name: 'yoshi'}
// }
// console.log(docOne, docTwo);
// tuples
let arr = ['ryu', 25, true];
arr[0] = false;
let tup = ['ryu', 25, true];
tup[0] = 'ken';
let student;
student = ['joel', 1860461];
