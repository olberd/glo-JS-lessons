"use strict";

let title = prompt("Как называется ваш проект?", "Калькулятор  верстки")
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000")
let adaptive = confirm("Нужен ли адаптив на сайте?")
let rollback = 10
let fullPrice
let servicePercentPrice
let allServicePrices

// let service1 = prompt("Какой дополнительный тип услуги нужен?", "service1")
// let servicePrice1 = +prompt("Сколько это будет стоить?")
// let service2 = prompt("Какой дополнительный тип услуги нужен?", "service2")
// let servicePrice2 = +prompt("Сколько это будет стоить?")

const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}

const getAllServicePrices = function() {
    let sum = 0
    
    for (let i=0; i < 2; i++){
        sum += +prompt("Сколько это будет стоить?")
    }
    return sum
}

const getFullPrice = function () {
    return screenPrice + allServicePrices
}

const getTitle = function (title) {
    return title.trim().charAt(0).toUpperCase() + title.trim().toLowerCase().slice(1);
}

const getServicePercentPrices = function () {
    return Math.ceil(fullPrice - fullPrice*(rollback/100))
}

if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%")
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%")
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена")
} else {
    console.log("Что-то пошло не так")
}

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
title = getTitle(title)
servicePercentPrice = getServicePercentPrices()




showTypeOf(allServicePrices)
showTypeOf(fullPrice)
showTypeOf(title)
showTypeOf(servicePercentPrice)

console.log("allServicePrices", getAllServicePrices)

console.log(screens)
console.log(fullPrice)
console.log(adaptive)
console.log(`Стоимость верстки экранов ${screenPrice} рублей`)
console.log(`Стоимость разработки сайта ${fullPrice} рублей`)
console.log(servicePercentPrice)