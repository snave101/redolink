const button5 = document.querySelector("#plusFive")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})
const button10 = document.querySelector("#plusTen")
const indicato = document.querySelector("#number-indicator")
const dis = document.querySelector("#display-heading")

button10.addEventListener('click', () => {
  disp.textContent = "added 10"
  indicator.textContent = (parseInt(indicator.textContent) + 10).toString()
})
const button15 = document.querySelector("#plusFifteen")
const inicator = document.querySelector("#number-indicator")
const dsp = document.querySelector("#display-heading")

button15.addEventListener('click', () => {
  disp.textContent = "added 15"
  indicator.textContent = (parseInt(indicator.textContent) + 15).toString()
})
const button20 = document.querySelector("#plusTwenty")
const indicatr = document.querySelector("#number-indicator")
const dip = document.querySelector("#display-heading")

button20.addEventListener('click', () => {
  disp.textContent = "added 20"
  indicator.textContent = (parseInt(indicator.textContent) + 20).toString()
})