"use strict";

const title = document.getElementsByTagName("h1")[0]
const buttonPlus = document.querySelector(".screen-btn")
const otherItemsPercent = document.querySelectorAll(".other-items.percent")
const otherItemsNumber = document.querySelectorAll(".other-items.number")

const inputRange = document.querySelector(".rollback input")
const inputRangeValue = document.querySelector(".rollback .range-value")

const startBtn = document.getElementsByClassName("handler_btn")[0]
const resetBtn = document.getElementsByClassName("handler_btn")[1]

const total = document.getElementsByClassName("total-input")[0]
const totalCount = document.getElementsByClassName("total-input")[1]
const totalCountOther = document.getElementsByClassName("total-input")[2]
const fullTotalCount = document.getElementsByClassName("total-input")[3]
const totalCountRollback = document.getElementsByClassName("total-input")[4]

let screens = document.querySelectorAll(".screen")


const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    screensNumber: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},

    init: function () {
        appData.addTitle()
        startBtn.addEventListener("click", appData.start)
        buttonPlus.addEventListener("click", appData.addScreenBlock)

        inputRange.addEventListener("input", function () {
            inputRangeValue.innerHTML = inputRange.value;
            appData.rollback = +inputRange.value;
            
        })
        

    },

    addTitle: function () {
        document.title = title.textContent
    },

    start: function () {
        let screens = document.querySelectorAll(".screen")
        let isEmpty = false;

        screens.forEach(function (screen) {
            let select = screen.querySelector('select');
            let input = screen.querySelector('input');
            if (select.selectedIndex === 0 || input.value === "" ) {
                isEmpty = true;
                return isEmpty
            }
        });

        if (!isEmpty) {
            appData.addScreens()
            appData.addServices()
            appData.addPrices()
            appData.showResult()
        }
 
        // appData.logger()
        // console.log(appData)
     
    },

    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrice
        totalCount.value = appData.screensNumber

    },

    addScreens: function () {
        screens = document.querySelectorAll(".screen")

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            const countScreens = +input.value;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: countScreens
            })
        })


    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)

        buttonPlus.before(cloneScreen)

    },

    addServices: function () {
      otherItemsPercent.forEach(function (item) {
          const check = item.querySelector('input[type=checkbox]')
          const label = item.querySelector('label')
          const input = item.querySelector('input[type=text]')

          if (check.checked) {
              appData.servicesPercent[label.textContent] = +input.value
          }

      })

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }

        })
    },

    addPrices: function () {

        appData.screenPrice = appData.screens.reduce(function (amount, curr)
        {
            return amount + curr.price
        }, 0)



        for(let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for(let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent

        appData.servicePercentPrice = Math.ceil(appData.fullPrice - appData.fullPrice*(appData.rollback/100))

        appData.screensNumber = appData.screens.reduce((sum, current) => (sum + current.count), 0);

    },

    logger: function () {
        console.log(appData.fullPrice)
        console.log(appData.servicePercentPrice)
        console.log(appData.screens)
    }
}

appData.init()
