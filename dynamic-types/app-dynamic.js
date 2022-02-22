// let box;
// console.log(typeof (box));
// box = 'Hello World!';
// console.log(typeof (box));
// // box = 100;
// // console.log(typeof (box));
// interface Product {
//     id: number,
//     name: string,
//     price: number
// };
// function getProduct(id: number): Product {
//     return {
//         id: id,
//         name: `Awesome Gadget ${id}`,
//         price: 99.5
//     }
// }
// const showProduct = (name: string, price: number) => {
//     console.log(`The product ${name} cost ${price}$.`)
// };
// const product = getProduct(1);
// showProduct(product.name, product.price);
// //How to defind  the type of the array.
// let array: string[] = ['Apple', 'Banana', 'Kewe'];
// console.log(array);
// //How to defind the type of the object.
// let person: {
//     name: string,
//     age: number
// }
// person = {
//     name: 'Moath',
//     age: 21
// }
// console.log(person.name, person.age)
// //How to difind the type of the parameter in function.
// let greeting = (name: string) => {
//     return `Hi ${name}`;
// }
// //backtick String
// let firstName: string = `Moath`;
// let title: string = `Web Developer`;
// let profile: string = `I'm ${firstName}
// I'm a ${title}`;
// console.log(profile);
// // Boolean type
// let pending: boolean;
// pending = true;
// pending = false;
// //Array Type
// let skills: string[] = [];
// skills[0] = "Problem Solving";
// skills[1] = "Programming";
// console.log(skills);
// skills.push('Software Design');
// console.log(skills);
// let skill = skills[0];
// console.log(typeof (skill));
// console.log(skills.length);
// array properties and methods
var series = [1, 2, 3];
console.log(series.length);
var doubleIt = series.map(function (e) { return e * 2; });
console.log(doubleIt);
var persons = [
    { firstname: 'Moath', lastname: 'Ahmad' },
    { firstname: 'Ahmad', lastname: 'Ahmad' },
    { firstname: 'Anas', lastname: 'Ahmad' }
];
document.getElementById('display').innerHTML = persons.map(getFullNames);
function getFullNames(item) {
    return [item.firstname, item.lastname].join();
}
