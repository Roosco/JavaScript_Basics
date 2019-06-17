// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// var, let, const

// const score = 10;
// console.log(age);

// data types. String, Number, Boolean, nulll, undefined, Symbol

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof z);

// const name = 'John';
// const age = 30;

// // Concatenation
// console.log('My name is ' + name + ' and I am ' + age);
// // ES6 / 2015
// const hello = `My name is ${name} and I am ${age}`;

// console.log(hello);

// const s = 'Hello World!';
// const s = 'technology, computers, it, code';

// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(', '))

// Arrays
// const numbers = new Array(1,2,3,4,5);

// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears'];

// fruits[3] = 'grapes';

// fruits.push('mangos'); // add on end

// fruits.unshift('strawberries'); // add on beginning

// fruits.pop(); // remove last element
// fruits.pop();
// fruits.pop();

// console.log(Array.isArray('hello')); // is array ?!

// console.log(fruits.indexOf('oranges'));

// console.log(fruits);


// OBJECT LITERALS

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city)

// const { firstName, lastName, address:{ street } } = person;
// console.log(firstName);
// console.log(street);

// person.email = 'john@gmail.com'; // add email to person object

// console.log(person);

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// console.log(todos[1].text);  

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// For
// for (let i = 0; i < 10; i++) {
//     console.log(`For loop Number: ${i}`);
// }

// While
// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// for(let todo of todos) {
//     console.log(todo.id);
// }

// forEach, map, filter
// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// const todoText = todos.map(function(todo){
//      return todo.text;
// });

// console.log(todoText);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// });

// console.log(todoCompleted);

// const x = 6;
// const y = 11;

// if(x === 10){ // == just value, === value and data type
//     console.log('x is 10');    
// } else if (x > 10) {
//     console.log('x is greater than 10');
// }
// else {
//     console.log('x is less than 10');
// }

// if(x > 5 && y > 10){ // == just value, === value and data type
//     console.log('x is more than 5 or y is more than 10');    
// }

// const x = 9;
// const color = x > 10 ? 'red' : 'blue';
// const color = 'green';
// console.log(color);

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }

// function addNums(num1 = 1, num2 = 1) {
//     // console.log(num1 + num2);    
//     return num1 + num2;
// }

// console.log(addNums(5, 5));

// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums(5, 5));

// const addNums = num1 => num1 + 5;
// console.log(addNums(5));

// todos.forEach((todo) => console.log(todo));

// Constructor function old way ES5 
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }



// Class, new way ES6 2016
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Instatiate Object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-2-1970');

// console.log(person1);
// console.log(person2.firstName);
// console.log(person2.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// console.log(person2.getFullName());
// console.log(person1);

// ------------------------------------Submit form------------------------
// console.log(window);

// window.alert(1);

// Single element
// const form = document.getElementById('my-form');
// console.log(form);
// console.log(document.querySelector('h1'));

// Multiple element
// console.log(document.querySelectorAll('.item')); // stick to this
// console.log(document.getElementsByClassName('item')); // old one, cant use array methods
// console.log(document.getElementsByTagName('li')); // old one, cant use array methods

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
// btn.addEventListener('mouseover', (e) => {
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     // console.log(e.target.id);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    
    if(nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}