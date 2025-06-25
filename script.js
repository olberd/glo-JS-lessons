let title = "Главная страница"
let screens = "Простые, Сложные, Интерактивные"
let screenPrice = 500
let rollback = 10
let fullPrice = 7000
let adaptive = true

console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)
console.log(screens.length)
console.log(`Стоимость верстки экранов ${screenPrice} рублей`)
console.log(`Стоимость разработки сайта ${fullPrice} рублей`)
console.log(screens.toLowerCase().split(", "))
console.log(fullPrice*(rollback/100))

