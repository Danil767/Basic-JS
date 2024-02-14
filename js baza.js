//1) Типы данных, проверка типов и преобразование типов

// JavaScript имеет 8 встроенных типов данных:

// null - пустое значение
// undefined - значение не было присвоенно
// boolean - правда или ложь
// number - число
// string - строка
// object - объект
// symbol - символ
// BigInt - необходимо добавить n в конец числового литерала. Большие целые числа.


// проверка типа с помощью оператора typeof

// console.log(typeof "foo")


//преобразование типов

// let value = true
// console.log(typeof value)
// value = String(true)
// console.log(typeof value)

// let myStr = 'abc'
// console.log(typeof myStr)
// let myNum = Number(myStr)
// console.log(typeof myNum)


//2) Арифметические и логические операторы

// Поддерживаются следующие математические операторы:
//Сложение +,
//Вычитание -,
//Умножение *,
//Деление /,
//Взятие остатка от деления %,
//Возведение в степень **.

// В JavaScript есть семь логических операторов:
//     || (ИЛИ) - истенное значение
//  ||= (Оператор логического присваивания ИЛИ)
//     && (И) - ложное значение
//  &&= (Оператор логического присваивания И)
//     ! (НЕ)
//     ?? (Оператор нулевого слияния)
//     ??= (Оператор нулевого присваивания)


//3) Условия, тернарный оператор

//Если первый операнд A вычисляется в истинное выражение true, то оператор вернёт выражение B.
// Если в false — вернёт выражение C.

// const myNum = 10
// console.log(myNum === 10 ? true : 'qwe')

//const myNum = 15
//let myGhost
//console.log(myGhost = myNum > 10 ? 'больше 10' : 'меньше или равно 10')

// const myFriend = function (name) {
//     return name ? `Привет, ${name}` : 'Салам бро!'
// }
// console.log(myFriend('Leo'))


//4) Цыклы и функции

//     Циклы

// for (let i = 0; i < 8; i++) {
//     console.log(i)
// }

// let i = 1
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// let i = 1
// do {
//     console.log(i)
//     i++
// }while (i >= 7)

// for(let i=1; i <= 6; i++){
//
//     if(i===4) break; <------ выход из цикла
//     console.log(i);
// }
// console.log("Конец работы");

// for(let i=1; i <= 6; i++){
//
//     if(i===4) continue; <----  пропустить итерацию, но не выходить из цикла
//     console.log(i);
// }
// console.log("Конец работы");

// Этот цикл перебирает все свойства объекта.

// const myObj = {
//     name: 'Dan',
//     age: 33,
// };
// for(let prop in myObj){
//     console.log(prop)
// }


//Этот цикл делает перебор наборов данных

// const myUser = ['Sem', 'Loci', 'Del']
// for (let name of myUser) {
//     console.log(name)
// }

//    Функции

// const Fn = function (){
//     console.log('qwe')
// }
// Fn()

// function myFn(a, b) {
//     let num = a + b
//     console.log(num)
// }
// myFn(11,4)

// function printPerson(username, age, email) {
//     console.log("Name:", username);
//     console.log("Age:", age);
//     console.log("Email:", email);
//     console.log("=========================");
// }
//
// const tom = ["Tom", 39, "tom@example.com"];
// const bob = ["Bob", 43, "bob@example.com"];
//
// printPerson(...tom);
// printPerson(...bob);

// function sum (...number) {
//     let result = 0
//     for (let n of number)
//         result += n
//         console.log(result)
//
// }
// sum(11,44)

// const hello = ()=> console.log("Hello");
// hello();


//5) Тема console.log()

// let a = 44
// console.log(a)


//6) Объекты

//Свойства объектов JavaScript

// const person = {
//     firstname:"John",
//     lastname:"Doe",
//     age:50,
//     eyecolor:"blue"
// }
// let a = person.firstname + " is " + person.age + " years old."
// console.log(a)

//Методы объектов JavaScript

//Метод Object.keys() создает массив ключей объекта.

// const obj = {
//     name: 'Leo',
//     age: 44,
//     city: 'Omsk'
// }
// const key = Object.keys(obj)
// console.log(key)

//Метод Object.keys можно использовать для итерации по ключам и значениям объектов.

// const obj = {
//     name: 'Leo',
//     age: 44,
//     city: 'Omsk'
// }
//
//  Object.keys(obj).forEach(key => {
//     let one = obj[key];
//     console.log(`${key}: ${one}`)
// })

// Метод Object.values()

//Метод Object.values() создает массив значений объекта.

// const obj = {
//     name: 'Leo',
//     age: 44,
//     city: 'Omsk'
// }
//
// const user = Object.values(obj)
// console.log(user)

//Метод Object.entries()

//Метод Object.entries() создает вложенный массив пар «ключ-значение» объекта.

// const obj = {
//     name: 'Leo',
//     age: 44,
//     city: 'Omsk'
// }
//
// const value = Object.entries(obj)
// console.log(value)

// Метод Object.assign()

//Метод Object.assign() копирует значения из одного объекта в другой. Также можно использовать spread оператор (…).

// const myObj_1 = {
//     name: 'Leo',
//     age: 44,
//     city: 'Omsk'
// }
//
// const myObj_2 = {
//     job: 'teacher',
//     experience: 2,
//     russian: true
// }
//
// const myInfo = Object.assign(myObj_1, myObj_2)
// console.log(myInfo)

//Метод Object.freeze()

// Метод Object.freeze() предотвращает модификацию свойств и значений объекта и добавление или удаление свойств объекта.

// const myUser = {
//     name: 'Leo',
//     age: 44,
//     city: 'Omsk'
// }
//
// const newUser = Object.freeze(myUser)
//
// newUser.name = 'Dali'
// newUser.age = 33
// console.log(newUser)

// Метод Object.seal()

// Метод Object.seal()предотвращает добавление новых свойств объекта, но позволяет изменять существующие свойства.

// const myUser = {
//     name: 'Leo',
//     city: 'Omsk'
// }
//
// const newUser = Object.seal(myUser)
// newUser.name = 'Max'
// console.log(newUser)

//Метод Object.getPrototypeOf()

//Метод Object.getPrototypeOf() используется для получения внутреннего скрытого [[Prototype]] объекта, также доступного через свойство __proto__.

// const employees = ['Ron', 'April', 'Andy', 'Leslie']
// console.log(Object.getPrototypeOf(employees))


// Cвойства объектов javascript
//JavaScript метод hasOwnProperty() возвращает логическое значение, которое указывает на то содержит ли объект указанное cобственное (неунаследованное) свойство, или метод.


// Ключевое слово this (Fn и Obj)
// this - это ссылка на контекст
//  => не имеет своего this

// const item = {
//     title: 'Phone',
//     fullPrice: 1000,
//     calculatorPrice(discountPercent = 0) {
//        console.log(this.fullPrice - discountPercent / 100 * this.fullPrice)
//     }
// }
// item.calculatorPrice(20)

// const car_1 = {
//     model: 'BMW',
//     year: 2000,
//     meaning: function () {
//         console.log(this.model)
//     }
// }

// const car_2 = {
//     model: 'Audi',
//     year: 2005,
//     meaning: function () {
//         console.log(this.model)
//     }
// }

// car_1.meaning() <- тоже самое через call и apply

// const car_1 = {
//     model: 'BMW',
//     year: 2000,
//     meaning: function (color, fuel) {
//         console.log(this.model, color, fuel)
//     }
// }

// const car_2 = {
//     model: 'Audi',
//     year: 2005,
// }

// car_1.meaning.apply(car_2, ['red', 'gas'])

// const car_1 = {
//     model: 'BMW',
//     year: 2000,
//     meaning: function (color, fuel) {
//         console.log(this.model, color, fuel)
//     }
// }

// const car_2 = {
//     model: 'Audi',
//     year: 2005,
// }

// car_1.meaning.call(car_2, 'red', 'gas')

// const car_1 = {
//     model: 'BMW',
//     year: 2000,
//     meaning: function (color, fuel) {
//         console.log(this.model, color, fuel)
//     }
// }

// const car_2 = {
//     model: 'Audi',
//     year: 2005,
// }

// const modelShower = car_1.meaning.bind(car_2)
// console.log(modelShower('red', 'gas'))

// const item = {
//     title: 'phone',
//     price: 1000,
// }

// function calcDiscount(age) {
//     if(age > 65) {
//         console.log(this.price / 2)
//     } else {
//         console.log(this.price)
//     }
// }
// calcDiscount.apply(item, [70])

// function CreateItem(title, price) {
//     this.title = title
//     this.price = price
//     return this
// }
// const item1 = new  CreateItem('phone', 100)
// const item2 = new  CreateItem('phone', 500)
// const item3 = new  CreateItem('phone', 1000)
// console.log(item1, item2, item3)


// Опциональная цепочка '?.'

//let user = {};
// пользователь без адреса
//alert( user?.address?.street );
// undefined (без ошибки) / ?. <- это своего рода &&


//Деструктуризация (массивы и объекты)

// const person = {
//     name: 'Max',
//     age: 20,
//     address: {
//         country: 'Russia',
//         city: 'Moscow'
//     }
// }
// const {name: firstName, age, car = 'Машины нет', address:{city, country}} = person
// console.log(firstName, age, car, city, country)

// function calcValues(a, b) {
//     return [a + b, a - b]
// }
//
// const  [sum, sub] = calcValues(42, 10)
//
// console.log(sum, sub)

// function calcValues(a, b) {
//     return [a + b, a - b, a * b, a / b]
// }
//
// const  [sum, , mult] = calcValues(42, 10)
//
// console.log(sum, mult)

// function calcValues(a, b) {
//     return [a + b, a - b, a * b, a / b]
// }
//
// const  [sum, , mult, ...other] = calcValues(42, 10)
//
// console.log(sum, mult, other)

// Операторы разворота и сворачивания (Spread & REST operators)

//Spread

// const num1 = [1,2,3,4]
// const num2 = [5,6,7,8]
// console.log([...num1, ...num2])

// const A = {
//     a: 'default',
//     b: 'jest_test'
// }
// const B = {
//     a: 'value_from_b'
// }
// let C = {
//     ...A,
//     ...B
// }
// console.log(C)

// const arr = [1,2,3]
// function sum(a,b,c) {
//     return a+b+c
// }
// console.log(sum(...arr))

//REST

// function res(arg, ...REST){
//     console.log(arg, REST)
// }
// res(1,2,3,4,5,6,7)


// 7) Методы чисел

// Метод toString()

//Метод toString() возвращает число в виде строки.

// let a = 123
// console.log(typeof a.toString())

//Метод Number()

//Метод Number() можно использовать для преобразования переменных JavaScript в числа:

// console.log(Number(true))
// console.log(Number(false))
// console.log(Number("10"))
// console.log(Number("  10"))
// console.log(Number("Андрей"))

//Метод parseInt() / Метод parseFloat() (анализирует стороку и возвращает первое число)

// Метод parseInt() анализирует строку и возвращает целое число. Разрешены пробелы. Возвращается только первое число:

// console.log(parseInt("10"))
// console.log(parseInt("10.33"))
// console.log(parseInt("10 20 30"))
// console.log(parseInt("10 год"))
// console.log(parseInt("год 10"))


// 8) Методы строк

// Метод indexOf()

// Метод indexOf() возвращает индекс (положение) на first вхождения указанного текста в строке:

// let str = 'анализирует строку и возвращает целое число'
// let pos = str.indexOf('строку')
// console.log(pos)

// Метод lastIndexOf()

//Метод lastIndexOf() возвращает индекс последнего вхождения указанного текста в строке:

// let str = 'анализирует строку и возвращает целое число'
// let pos = str.lastIndexOf('строку')
// console.log(pos)

// Метод slice()

// Метод slice() извлекает часть строки и возвращает извлеченную часть в новой строке.
// Метод принимает 2 параметра: начальную позицию и конечную позицию (конец не включен).

// let str = "Яблоко, Банан, Киви";
// let res = str.slice(7, 13);
// console.log(res)

//Метод replace()

// Метод replace() заменяет указанное значение с другим значением в строке:

// let str = "Пожалуйста, посетите Microsoft!"
// let n = str.replace("Microsoft", "School")
// console.log(n)

// Метод toUpperCase() и toLowerCase()

// преобразование в верхний и нижний регистр

// let str = "Пожалуйста, посетите Microsoft!"
// console.log(str.toUpperCase())

// let str = "Пожалуйста, посетите Microsoft!"
// console.log(str.toLowerCase())

// Метод concat()

//Метод concat() объединяет две или более строк:

// const str1 = 'Привет,'
// const str2 = 'Эдик'
// const str3 = str1.concat("", str2)
// console.log(str3)

// Метод split()

//Строку можно преобразовать в массив с помощью split()

// const txt = "a,b,c,d,e"
// console.log(txt.split())

// Метод charAt()

// Метод charAt() возвращает символ по указанному индексу (позиции) в строке:

// const str = "ПРИВЕТ МИР"
// console.log(str.charAt(0))


// 9) Методы массивов

// Метод join() / метод toString()

// Метод join() объединяет все элементы массива в строку.

// const myArr = ["Банан", "Апельсин", "Яблоко", "Манго"]
// console.log(myArr.join(', '))

// Метод pop()

// Метод pop() удаляет последний элемент из массива:

// const myArr = ["Банан", "Апельсин", "Яблоко", "Манго"]
// const a = myArr.pop()
// console.log(a)
// console.log(myArr)


// Метод push()

// Метод push() добавляет новый элемент в массив (в конце):

// const myArr = ["Банан", "Апельсин", "Яблоко", "Манго"]
// myArr.push("Кокос")
// console.log(myArr)

// Метод shift()

// Метод shift() удаляет первый элемент массива и "сдвигает" все другие элементы к более низкому индексу.

// const myArr = ["Банан", "Апельсин", "Яблоко", "Манго"]
// myArr.shift()
// console.log(myArr)

// Метод unshift()

//Метод unshift() добавляет новый элемент в массиве (в начале), и "смещает" старые элементы:

// const myArr = ["Банан", "Апельсин", "Яблоко", "Манго"]
// myArr.unshift("Дыня")
// console.log(myArr)

// Метод splice()

// Метод splice() может быть использован для добавления новых элементов в массив:

// const myArr = ["Банан", "Апельсин", "Яблоко", "Манго"]
// myArr.splice(1,0, "Груша", "Арбуз")
// console.log(myArr)

// Метод concat()

// Метод concat() создает новый массив путем слияния (конкатенации) существующих массивов:

// const myArr1 = ["Банан", "Апельсин"]
// const myArr2 = ["Яблоко", "Манго"]
// const myArr3 = myArr1.concat(myArr2)
// console.log(myArr3)

// Метод slice()

// Метод slice() нарезает из куска массива в новый массив.

// const myArr = ["Банан", "Апельсин", "Яблоко", "Манго"]
// const Arr = myArr.slice(2)
// console.log(Arr)
// console.log(myArr)


// 10) Перебор объекта, преобразование объекта в массив

//Преобразование объекта в массив:

// const myObj = {
//     name: 'Leo',
//     city: 'Omsk',
//     live: true,
// }
// const Array = Object.keys(myObj)
// console.log(Array)

// const myObj = {
//     name: 'Leo',
//     city: 'Omsk',
//     live: true,
// }
// const Array = Object.values(myObj)
// console.log(Array)

// const myObj = {
//     name: 'Leo',
//     city: 'Omsk',
//     live: true,
// }
// const Array = Object.entries(myObj)
// console.log(Array)

//Перебор объекта

// const myObj = {
//     name: 'Leo',
//     city: 'Omsk',
//     live: true,
// }
// for (let person in myObj) {
//     if (myObj.hasOwnProperty(person)) {
//         console.log(person)
//     }
// }


//10.1) Замыкания

// const x = 1
// const logToConsole = function () {
//     console.log(x)
// }
// logToConsole()

// let x = 1
// const logToConsole = function () {
//     console.log(x)
// }
// x = 2
// logToConsole()

// function makeCounter(count) {
//     return function () {
//         return count++
//     }
// }
// let counter = makeCounter(0)
// let counter2 = makeCounter(0)
// alert(counter()) // 0
// alert(counter()) // 1
// alert(counter2()) // 0
// alert(counter2()) // 1

// function createIncrement() {
//     let count = 0 //1 //2 //3
//     function increment() {
//         count++
//     }
//     let message = `Count is ${count}`
//     function log() {
//         console.log(message)
//     }
//
//     return [increment, log]
// }
// const [increment, log] = createIncrement()
// increment()
// increment()
// increment()
// log()

// function createIncrement() {
//     let count = 0 //1 //2 //3
//     function increment() {
//         count++
//     }
//
//     function log() {
//         let message = `Count is ${count}`
//         console.log(message)
//     }
//
//     return [increment, log]
// }
// const [increment, log] = createIncrement()
// increment()
// increment()
// increment()
// log()


// 11) Set, Map, WeakSet, WeakMap

// Map

// let map = new Map()
// map.set('str', 'string')
// map.set(1, 'number')
// map.set(true, 'boolean')
// console.log(map.get(1))
// console.log(map.get(true))
// console.log(map.size)

// let map = new Map([
//     ['str', 'string'],
//     [1, 'number'],
//     [true, 'boolean']
// ])
// console.log(map.get(1))
// console.log(map.get(true))
// console.log(map.size)

// Set

// let jack = {name: 'Jack'}
// let max = {name: 'Max'}
// let leo = {name: 'Leo'}
// let users = new Set()
// users.add(jack)
// users.add(max)
// users.add(leo)


// 12) JSON

// const post = {
//     title: 'My post',
//     likesQty: 5
// }
// console.log(JSON.stringify(post))
//
// const postStringified = JSON.stringify(post)
// console.log(JSON.parse(postStringified))


// 13) Обработка ошибок

// const fnWithError = () => {
//     throw new Error('Some error')
// }
//
// try {
//     fnWithError()
// } catch (error) {
//     console.error(error)
//     console.log(error.message)
// }
//
// console.log('Continue...')


// 14) setTimeout / setInterval

// function myMame() {
//     console.log('Leo')
// }
// setTimeout(myMame, 3000)

// function myMame() {
//     console.log('Leo')
// }
// let a = setInterval(myMame, 3000)


// 15) Классы

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
//
//     upvote() {
//         this.votesQty += 1
//     }
// }

//статические методы
// class Comments {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
//
//     upvote() {
//         this.votesQty += 1
//     }
//
//     static mergeComments(first, second) {
//         return `${first} ${second}`
//     }
// }
// Comments.mergeComments('First comment.', 'Second comment')

//создание экземпляра класса
// const firstComment = new Comment('First comment')
// const secondComment = new Comment('Second commend')
// const thirdComment = new Comment('Third comment')

// проверка принадлежности
// console.log(firstComment instanceof Comment)

// вызов унаследованных методов
// firstComment.upvote()
//  console.log(firstComment.votesQty)
// firstComment.upvote()
// console.log(firstComment.votesQty)
// console.log(secondComment)
// secondComment.upvote()
// console.log(secondComment.votesQty)

// проверка принадлежности свойств экземпляру объекта
// console.log(firstComment.hasOwnProperty('text'))
// console.log(firstComment.hasOwnProperty('votesQty'))
// console.log(firstComment.hasOwnProperty('upvote'))

// расширение других классов
// class NumberArray extends Array {
//     sum() {
//         return this.reduce((el, acc) => acc += el, 0)
//     }
// }
//
// const myArray = new NumberArray(2, 5, 7)
//
// console.log(myArray)
// console.log(myArray.sum())


// 16) Асинхронность, async/await, промисы (EventLoop)

// Промисы

// создание промиса
// const myPromise = new Promise((resolve, reject) => {

// })

//получение результата промиса
// myPromise
//     .then(value => {

// })
//     .catch(error => {

// })

// работа с сервером
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
//         console.log(response)
//         return response.json()
//     })
//     .then(json => console.log(json))
//     .catch(error => console.log(error))



// const getData = (url) =>
//     new Promise((resolve, reject) =>
//     fetch(url)
//         .then(response => response.json())
//         .then(json => resolve(json))
//         .catch(error => reject(error))
//     )
// getData('https://jsonplaceholder.typicode.com/todos')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))


//  async/await

// const asyncFn = async () => {
//     return 'Success!'
// }
// console.log(asyncFn())

// ожидание результата wait
// const timerPromise = () =>
//     new Promise((resolve, reject) =>
//     setTimeout(() => resolve(), 2000))
//
// const asyncFn = async () => {
//     console.log('Timer starts')
//     await timerPromise()
//     console.log('Timer anded')
// }
//
// console.log(asyncFn())


// 17) Модули import и export

// документ moduleOne.js

// const myName = () => {
//     console.log('Dan')
// }
// export default myName

// документ moduleTwo.js

// import printMyName (можно использовать другое название переменной) from './moduleOne.js' (расширение документа mjs)
// printMyName()

// Несколько экспортов и переменование

// документ moduleOne.js

// const one = 1
// const two = 'two'
// export {
//     one,
//     two
// }

// документ moduleTwo.js

// import {
//     one as oneRenamed (as переменование),
//     two
// } from './moduleOne.js'
// console.log(oneRenamed)
// console.log(two)
