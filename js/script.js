"use strict";

const title = document.getElementsByTagName("h1")
const buttons = document.getElementsByClassName("handler_btn")
const buttonPlus = document.querySelector(".screen-btn")
const otherItemsPercent = document.querySelectorAll(".other-items.percent")
const otherItemsNumber = document.querySelectorAll(".other-items.number")
const rollback = document.querySelector(".rollback > [type=range]")
const rangeValue = document.querySelector(".rollback > .range-value > span")
const totalInputs = document.getElementsByClassName("total-input")
const total = totalInputs[0]
const totalCount = totalInputs[1]
const totalCountOther = totalInputs[2]
const totalFullCount = totalInputs[3]
const totalCountRollback = totalInputs[4]
let screens = document.querySelectorAll(".screen")


console.log(title[0])
console.log(buttons)
console.log(buttonPlus)
console.log(otherItemsPercent)
console.log(otherItemsNumber)
console.log(rollback)
console.log(rangeValue)
console.log(total)
console.log(totalCount)
console.log(totalCountOther)
console.log(totalFullCount)
console.log(totalCountRollback)




console.log(screens)