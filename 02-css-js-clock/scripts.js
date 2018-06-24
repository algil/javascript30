'use strict'

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate () {
  const date = new Date()

  const secondDegrees = ((date.getSeconds() / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondDegrees}deg)`

  const minuteDegrees = ((date.getMinutes() / 60) * 360) + 90
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

  const hourDegrees = ((date.getHours() / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000)
