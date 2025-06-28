"use strict";

let title = prompt("Как называется ваш проект?")
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
let screenPrice = +prompt("Сколько будет стоить данная работа?")
let rollback = 10
let adaptive = confirm("Нужен ли адаптив на сайте?")
let service1 = prompt("Какой дополнительный тип услуги нужен?", "service1")
let servicePrice1 = +prompt("Сколько это будет стоить?")
let service2 = prompt("Какой дополнительный тип услуги нужен?", "service2")
let servicePrice2 = +prompt("Сколько это будет стоить?")
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice = Math.ceil(fullPrice - fullPrice*(rollback/100))

console.log(title)
console.log(screens)
console.log(fullPrice)
console.log(adaptive)
console.log(`Стоимость верстки экранов ${screenPrice} рублей`)
console.log(`Стоимость разработки сайта ${fullPrice} рублей`)
console.log(servicePercentPrice)

if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%")
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%")
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена")
} else if (fullPrice < 0) {
    console.log("Что-то пошло не так")
}