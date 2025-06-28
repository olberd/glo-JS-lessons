let title = prompt("Как называется ваш проект?")
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
let screenPrice = prompt("Сколько будет стоить данная работа?")
let rollback = 10
let fullPrice = 7000
let adaptive = prompt("Нужен ли адаптив на сайте?")

console.log(title)
console.log(screens)
console.log(fullPrice)
console.log( adaptive)
console.log(`Стоимость верстки экранов ${screenPrice} рублей`)
console.log(`Стоимость разработки сайта ${fullPrice} рублей`)
console.log(screens.toLowerCase().split(", "))
console.log(fullPrice*(rollback/100))