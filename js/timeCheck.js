document.addEventListener("DOMContentLoaded", (event) => {
  let days = document.getElementById(`days`)
let hours = document.getElementById(`hours`)
let minutes = document.getElementById(`minutes`)
let seconds = document.getElementById(`seconds`)


let dd = document.getElementById(`dd`)
let hh = document.getElementById(`hh`)
let mm = document.getElementById(`mm`)
let ss = document.getElementById(`ss`)

let day_dot = document.querySelector(`.day_dot`)
let hr_dot = document.querySelector(`.hr_dot`)
let min_dot = document.querySelector(`.min_dot`)
let sec_dot = document.querySelector(`.sec_dot`)

let x = setInterval(function(){
  const now = new Date();

  const dayOfWeek = now.getDay();
  const daysUntilSaturday = 6 - dayOfWeek; // Оставшееся количество дней до субботы
  const hoursUntilSaturday = daysUntilSaturday * 24; // Количество часов до субботы
  const millisecondsUntilSaturday = hoursUntilSaturday * 60 * 60 * 1000; // Количество миллисекунд до субботы

  const targetTime = new Date(now.getTime() + millisecondsUntilSaturday); // Дата и время субботы в 15:00
  targetTime.setHours(15, 0, 0, 0); // Устанавливаем время 15:00
  
  const timeDifference = targetTime - now; // Вычисляем разницу во времени
  const d = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) // Оставшиеся дни
  const h = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ?? 0 // Оставшиеся часы
  const m = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)) ?? 0 // Оставшиеся минуты
  const s = Math.floor((timeDifference % (1000 * 60)) / 1000) ?? 0 // Оставшиеся секунды


  days.innerHTML = d + "<br><span>Days<span>"
  hours.innerHTML = h + "<br><span>Hours<span>"
  minutes.innerHTML = m + "<br><span>Minutes<span>"
  seconds.innerHTML = s + "<br><span>Secunds<span>"

  dd.style.strokeDashoffset = 440 - (440 * d) / 7 
  hh.style.strokeDashoffset = 440 - (440 * h) / 24
  mm.style.strokeDashoffset = 440 - (440 * m) / 60
  ss.style.strokeDashoffset = 440 - (440 * s) / 60

  day_dot.style.transform = `rotateZ(${d * 51.4}deg)`
  hr_dot.style.transform = `rotateZ(${h * 15}deg)`
  min_dot.style.transform = `rotateZ(${m * 6}deg)`
  sec_dot.style.transform = `rotateZ(${s * 6}deg)`



})
});


