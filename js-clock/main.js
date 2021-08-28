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
   const hourDegrees = ((hour / 60) * 360 + 90);
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
      let days = ['December', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
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