"use strict";

const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    service1: "",
    service2: "",

    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор  верстки")
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")

        do {
            appData.screenPrice = +prompt("Сколько будет стоить данная работа?", "16000")
        }  while (!appData.isNumber(appData.screenPrice))

        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    getAllServicePrices: function() {
        let sum = 0

        for (let i=0; i < 2; i++){
            let amount = 0

            if (i===0){
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "service1")

            }else if (i === 1){
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "service2")
            }

            do {
                amount = +prompt("Сколько это будет стоить?")
            } while (!appData.isNumber(amount))

            sum += amount
        }
        return sum
    },

    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices
    },

    getTitle: function (title) {
        return title.trim().charAt(0).toUpperCase() + title.trim().toLowerCase().slice(1);
    },

    getServicePercentPrices: function () {
        return Math.ceil(appData.fullPrice - appData.fullPrice*(appData.rollback/100))
    },

    getRollbackMessage: function (price) {

        if (price >= 30000) {
            return 'Даем скидку в 10%';
        } else if (price >= 15000 && price < 30000) {
            return 'Даем скидку в 5%';
        } else if (price >= 0 && price < 15000) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что то пошло не так';
        }
    },

    logger: function () {
        console.log(appData.fullPrice)
        console.log(appData.servicePercentPrice)
        console.log(appData.getRollbackMessage(appData.fullPrice))
        console.log("Стоимость верстки экранов " +
            appData.screenPrice + " руб. и Стоимость разработки сайта " +
            appData.fullPrice+ " руб.")

    },

    start: function () {
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrices()
        appData.title = appData.getTitle(appData.title)
        appData.logger()
    }

}

appData.start()

// const isNumber = function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num)
// }
//
// const getAllServicePrices = function() {
//     let sum = 0
//
//     for (let i=0; i < 2; i++){
//         let amount = 0
//
//         if (i===0){
//             appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "service1")
//
//         }else if (i === 1){
//             appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "service2")
//         }
//
//         do {
//             amount = +prompt("Сколько это будет стоить?")
//         } while (!isNumber(amount))
//
//         sum += amount
//     }
//     return sum
// }
//
// const getFullPrice = function () {
//     return appData.screenPrice + appData.allServicePrices
// }
//
// const getTitle = function (title) {
//     return title.trim().charAt(0).toUpperCase() + title.trim().toLowerCase().slice(1);
// }
//
// const getServicePercentPrices = function () {
//     return Math.ceil(appData.fullPrice - appData.fullPrice*(appData.rollback/100))
// }
//
// const getRollbackMessage = function (price) {
//
//     if (price >= 30000) {
//         return 'Даем скидку в 10%';
//     } else if (price >= 15000 && price < 30000) {
//         return 'Даем скидку в 5%';
//     } else if (price >= 0 && price < 15000) {
//         return 'Скидка не предусмотрена';
//     } else {
//         return 'Что то пошло не так';
//     }
// }

// appData.asking()
// appData.allServicePrices = getAllServicePrices()
// appData.fullPrice = getFullPrice()
// appData.servicePercentPrice = getServicePercentPrices()
// appData.title = getTitle(appData.title)

// console.log(appData.fullPrice)
// console.log(appData.servicePercentPrice)

// console.log(getRollbackMessage(appData.fullPrice))

// console.log("Стоимость верстки экранов " + appData.screenPrice + " руб. и Стоимость разработки сайта " +appData.fullPrice+ " руб.")