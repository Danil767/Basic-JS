// document - объект который позволяет получить доступ к DOM


// Навигация по объекту
// const htmlElement = document.documentElement или (.head, .body)  - получаем объект html, head и body

// Первый и последний дочерние элементы
// const firstChildNode = bodyElement.firstChild
// const lastChildNode = bodyElement.lastChild

// ChildNodes содержит список всех детей
// const childNodes = bodyElement.childNodes

// Перебор коллекции
// for (let node of childNodes) {
//     console.log(node)   - перебор всех узлов в коллекции
// }

// Создание узлов

// document.createElement(тег)   - создание нового элемента указанного в параметрах
// document.createTextNode(текст) - создание текстового узла



// Поиск элементов в DOM

// по идентификатору id
// let myElement = document.getElementById("intro");

// по имени тега
// let x = document.getElementsByTagName("p");

// по имени класса
// let x = document.getElementsByClassName("intro");

// по селекторам CSS (поиск всех элементов подходящих под css селектор / поиск первого элемента по css селектору)
// let x = document.querySelectorAll("p.intro");
// let x = document.querySelector



// Получение значений свойств и атрибутов у элементов

// <img id="brand" class="brand" src="logo.png" alt="логотип сайта">

// получим элемент
// let brandImg = document.querySelector('#brand');

// выведем в консоль значения DOM-свойств элемента
// console.log(brandImg.id); // "brand"
// console.log(brandImg.className); // "brand"


// Работа с DOM-свойствами элемента

// <div id="alert" className="alert alert-info" title="Текст подсказки...">
//     Текст информационного сообщения...
// </div>
//
// <script>
//     let alert = document.querySelector('#alert'); // получим элемент
// </script>


// Чтение значений DOM-свойств:

// получим значение DOM свойства id
// let alertId = alert.id; // "alert"

// получим значение DOM свойства className
// let alertClass = alert.className; // "alert alert-info"

// // получим значение DOM свойства title
// let alertId = alert.title; // "Текст подсказки..."


// Изменение значений DOM-свойств:

// для изменения значения DOM свойству, ему нужно просто присвоить новое значение
// alert.title = "Новый текст подсказки";
// присвоим DOM-свойству title элемента новое значение


// Добавление DOM-свойств:

// установим свойству lang значение равное "ru"
// alert.lang = "ru";
// установим свойство dir значение равное "ltr"
// alert.dir = "ltr";


// Атрибуты элементов и методы для работы с ними

// В JavaScript для выполнения операций, связанных с атрибутами, имеется четыре метода:
//
// .hasAttribute('имя_атрибута') – проверяет наличие указанного атрибута у элемента. Если проверяемый атрибут есть у элемента, то данный метод возвращает true, в противном случае - false.
// .getAttribute('имя_атрибута') – получает значение атрибута. Если указанного атрибута нет у элемента, то данный метод возвращает пустую строку ("") или null.
// .setAttribute('имя_атрибута', 'значение_атрибута') – устанавливает указанный атрибут с указанным значением элементу. Если указанный атрибут есть у элемента, то данный метод тогда просто изменит ему значение.
// .removeAttribute('имя_атрибута') - удаляет указанный атрибут у элемента.


// <input name="name" type="text" value="Bob">
//
//     <script>
//         let name = document.querySelector('input[name="name"]'); // получим элемент
//     </script>

// получим значение атрибута value у элемента
//name.getAttribute('value'); // "Bob"

// получим значение DOM-свойства value
//name.value; // "Bob"

// обновим значение атрибута value, установим ему новое значение
//name.setAttribute('value', 'Tom'); // "Tom"
// получим значение DOM свойства value
//name.value; // "Tom"



// Обработчик событий - AddEventListener.

// const button = document.querySelector('.btn')   <--  чтобы куда то повесить обработчик событий сначала этот элемент нужно выделить! (All если элементов много)

// button.addEventListener('click', function (){      <-- вешаем обработчик событий на кнопку. AddEventListener принимает 2 аргумента (событие которое слушаем и колбэк функцию).
//     console.log('click')          <-- функция работает каждый раз когда будет срабатывать событие клик!!!
// })

//  ИЛИ

// function handleClick() {
//     console.log('click')
// }
// button.addEventListener('click', handleClick) <-- функцию пишем без вызова ().  Логику handleClick можно переиспользовать на другие элементы!!!


// Добавить события к множеству элементов
// button.forEach(button => {
//     button.addEventListener('click', function () {
//         console.log('clicked!!!')
//     })
// })


// Снятие обработчика событий с элемента
// btn.removeEventListener('click', handleClick)   <-- нужно обязательно указывать имя функции с событием (или стрелочкую с названием переменной) а при без имянной не будет работать!!!


// Всплытие и перехват события

// Всплытие

// const btn = document.querySelector('btn')  <-- находим кнопку в div
// const wrap = document.querySelector('.wrap')  <-- находим div в котором находится кнопка

// btn.addEventListener('click', function (e) {
// e.stopPropagation()   <-- нужно чтобы при клике выполнялась только функция dtn
// //     console.log('click btn')
// })

// wrap.addEventListener('click', function (e) {
//     console.log('click wrap')
// })

// Погружение (Сначала отработают body, wrap а потом только btn.
// События без stopPropagation сначала погрузятся а после всплывут )

// wrap.addEventListener('click', function (e) {
//     console.log('click wrap')
// }, true,)
//
// document.body.addEventListener('click', function (e) {
//     console.log('click wrap')
// }, true,)



// FormData API

// Объявляем функцию загрузки файла

// function sendFile(file) {
//     const data = new FormData()

//  Добавляем файл

//     data.append('document', file)
//     return fetch('/api/upload/', {
//         method: 'POST',
//         body: data,
//     })
// }
// const fileInput = document.querySelector('#file-input')
// fileInput.addEventListener('change', (event) => {

//     Получаем файл. Обратите внимание, что файлов может быть несколько если у инпута стоит атрибут `multiple`

//     const file = event.target.files[0]

//     Отправляем файл на сервер при помощи созданной функции

//     sendFile(file)

//     Очищаем текущее значение инпута. Если этого не делать, то при ошибке загрузки, повторный выбор того же файла не вызовет событие _change_

//     event.target.value = null
// })



//  Fetch


// Ответ от сервера

// function getPost(id) {
//     return new Promise((resolve, reject) => {
//        fetch(`какой то адрес/${id}`)
//            .then(response => response.json())
//            .then(post => resolve(post))
//            .catch(err => reject(err))
//     })
// }
// getPost(1).then(post => console.log(post))


// Отмена запроса

// const controller = new AbortController()

// function fetchData() {
//     return fetch('http://jsonplaceholder.typicode.com/posts', {
//         signal: controller.signal,
//     })
//         .then((response) => response.json())
//         .catch((e) => {
//             console.log(e)
//         })
// }
// fetchData()

// Если запрос еще не выполнился, то он будет прерван
// прерванный fetch вернет Promise с ошибкой
// controller.abort()


//  Загрузка файла на сервер

// <form id="form">
//     <input type="file" id="avatar">
//         <button type="submit">Загрузить</button>
// </form>

// Находим элемент с файлом

// const fileInput = document.getElementById('avatar')
// const form = document.getElementById('form')
//
// function handleSubmit(event) {
//     event.preventDefault()
//
//     const formData = new FormData()

    // Добавляем файлы из инпута к данным

    // for (let i = 0; i < fileInput.files.length; i++) {
    //     const file = fileInput.files[i]
    //     formData.append('avatar', file, file.name)
    // }

    // Отправляем файлы на сервер

//     fetch('https://backend.com/api/upload', {
//         method: "POST",
//         body: formData,
//     })
// }
//
// form.addEventListener('submit', handleSubmit)



















