"use strict";

const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    services: {},


    start: function () {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getTitle()
        appData.logger()
    },

    asking: function () {
        do {
            appData.title = prompt("Как называется ваш проект?", "Калькулятор  верстки")
        } while (appData.isNumber(appData.title))

        for (let i=0; i < 2; i++) {
            let name = ""
            do {
                name= prompt("Какие типы экранов нужно разработать?")
            } while (appData.isNumber(name))
            let price = 0

            do {
                price = +prompt("Сколько будет стоить данная работа?")
            }  while (!appData.isNumber(price))

            appData.screens.push({id: i, name: name, price: price})
        }

        for (let i=0; i < 2; i++){
            let name = ""
            do {
                name= prompt("Какой дополнительный тип услуги нужен?")
            } while (appData.isNumber(name))
            let price = 0

            do {
                price = +prompt("Сколько это будет стоить?")
            } while (!appData.isNumber(price))

            appData.services[name] = +price
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    addPrices: function () {

        appData.screenPrice = appData.screens.reduce(function (amount, curr)
        {
            return amount + curr.price
        }, 0)

        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }

    },

    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices
    },

    getTitle: function () {
        appData.title = appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().toLowerCase().slice(1);
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - appData.fullPrice*(appData.rollback/100))
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
        console.log(appData.screens)
    }
}

appData.start()
