//Analog clock

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
   const now = new Date();

   const second = now.getSeconds();
   const secondDegrees = ((second / 60) * 360 + 90);
   secondHand.style.transform = `rotate(${secondDegrees}deg)`;

   const minute = now.getMinutes();
   const minuteDegrees = ((minute / 60) * 360 + 90);
   minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

   const hour = now.getHours();
   const hourDegrees = (((hour / 12)) * 360 + 90);
   hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000);

//Electronic clock

const clock = document.querySelector('.hexo-clock');
const calendar = document.querySelector('.calendar-info');

function hexoClock() {
   const now = new Date();

   let second = now.getSeconds().toString();
   let minute = now.getMinutes().toString();
   let hour = now.getHours().toString();
   let date = now.getDate();
   let year = now.getFullYear();

   function getWeekDay(now) {
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'СБ'];
      return days[now.getDay()];
   }

   function getMonthDay(now) {
      let days = ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
      return days[now.getMonth()];
   }

   if (second.length < 2) {
      second = '0' + second;
   }
   if (minute.length < 2) {
      minute = '0' + minute;
   }
   if (hour.length < 2) {
      hour = '0' + hour;
   }

   const clockString = `${hour}:${minute}:${second}`;
   const calendarString = `${date} ${getWeekDay(now)} ${getMonthDay(now)} ${year}`;

   clock.textContent = clockString;
   calendar.textContent = calendarString;
}

setInterval(hexoClock, 1000);

//Light/Dark Mode

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', (e) => {
   const bg = document.querySelector('.wallpaper');
   if (bg.classList.contains('dark')) {
      bg.classList.remove('dark');
      bg.classList.add('light');

      toggle.classList.add('btn-light');
      toggle.classList.remove('btn-dark')
      e.target.textContent = 'Dark Mode';
   } else {
      bg.classList.add('dark');
      bg.classList.remove('light');

      toggle.classList.add('btn-dark');
      toggle.classList.remove('btn-light')
      e.target.textContent = 'Light Mode';
   }
})

console.group('Самооценка по заданию');
console.log('Разобраться в коде чужого проекта, понять его, воспроизвести исходное приложение. Правки и изменения допускаются и приветствуются, если они не ухудшают внешний вид и функционал исходного проекта. За недостатки, которые присутствуют в исходном проекте, баллы не снимаются. +10');
console.log('Для каждого проекта указан обязательный дополнительный функционал, который необходимо реализовать. В каждом задании обязательный дополнительный функционал свой, он указан в описании задания. +10');
console.log('Дополнительный фукционал на выбор это одно или несколько улучшений, которые вы можете добавить в свой проект. +10');
console.groupEnd('Итог: 30')
