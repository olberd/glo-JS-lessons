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
        this.addTitle()
        startBtn.addEventListener("click", this.start)
        buttonPlus.addEventListener("click", this.addScreenBlock)

        inputRange.addEventListener("input", function () {
            inputRangeValue.innerHTML = inputRange.value;
            appData.rollback = +inputRange.value;
            
        })
        
        resetBtn.addEventListener("click", this.reset)
        

    },

    addTitle: function () {
        document.title = title.textContent
    },

    start: function () {
        let screens = document.querySelectorAll(".screen")
        let isEmpty = false;

        screens.forEach(screen => {
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
            // appData.reset()
        }
        
        
 
        // appData.logger()
        // console.log(appData)
    },

    showResult: function () {
        total.value = this.screenPrice
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = this.fullPrice
        totalCountRollback.value = this.servicePercentPrice
        totalCount.value = this.screensNumber

    },

    addScreens: function () {
        screens = document.querySelectorAll(".screen")
        
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent;
            const countScreens = +input.value;
            
            select.disabled = true;
            input.disabled = true;
            
            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: countScreens
            })
        })

        startBtn.style.display = "none";
        resetBtn.style.display = "block";


    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)

        buttonPlus.before(cloneScreen)

    },

    addServices: function () {
      otherItemsPercent.forEach(item => {
          const check = item.querySelector('input[type=checkbox]')
          const label = item.querySelector('label')
          const input = item.querySelector('input[type=text]')

          if (check.checked) {
              this.servicesPercent[label.textContent] = +input.value
          }

      })

        otherItemsNumber.forEach(item => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }

        })
    },

    addPrices: function () {

        this.screenPrice = this.screens.reduce(function (amount, curr)
        {
            return amount + curr.price
        }, 0)

        
        for(let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }

        for(let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = this.screenPrice + this.servicePricesNumber + this.servicePricesPercent
      
        this.servicePercentPrice = Math.ceil(this.fullPrice - this.fullPrice*(this.rollback/100))

        this.screensNumber = this.screens.reduce((sum, current) => (sum + current.count), 0);

        console.log(this.screens)
        this.screens = [];

    },
    
    reset: function () {
        console.log(this.screens)
        this.screens = [];
        console.log(this.screens)
        
        let screenBlocks = document.querySelectorAll(".screen")
        let checkboxes = document.querySelectorAll("[type='checkbox']")
        let range = document.querySelector("[type='range']")
        let rangeValue = document.querySelector(".range-value")

        resetBtn.style.display = "block";
        
        screenBlocks.forEach( (elem, idx) => {
           if ( idx !== 0) {
               elem.remove();
           }
            elem.querySelector('select').disabled = false;
            elem.querySelector('input').disabled = false;
            elem.querySelector('select').value = "";
            elem.querySelector('input').value = "";
            
        })
        
        checkboxes.forEach(elem => {
            elem.checked = false;
        })
        
        range.value = 0;
        rangeValue.textContent = "0%";

        resetBtn.style.display = "none";
        startBtn.style.display = "block";
               
    },

    logger: function () {
        console.log(appData.fullPrice)
        console.log(appData.servicePercentPrice)
        console.log(appData.screens)
    }
}

appData.init()
