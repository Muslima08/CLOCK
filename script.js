const hour = document.querySelector('.h'),
  min = document.querySelector('.m'),
  sec = document.querySelector('.s'),
  hoursNumber = document.querySelector('.hours'),
  minutesNumber = document.querySelector('.minutes');



// let time = new Date();

// console.log(time);
// console.log(time.getDate());
// console.log(time.getDay());
// console.log(time.getFullYear());
// console.log(time.getHours());
// console.log(time.getMilliseconds());
// console.log(time.getMonth());



function clock() {

  let time = new Date(),
    second = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;

  sec.style = `transform: rotate(${second}deg)`;
  min.style = `transform: rotate(${minutes}deg)`;
  hour.style = `transform: rotate(${hours}deg)`;

  hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

  setTimeout(() => clock(), 1000);
  // Рекурсия  это когда функция вызывает саму себя внутри себя
}

clock();
const tabsItem = document.querySelectorAll('.tabsItem'),
  tabsContent = document.querySelectorAll('.tabsContentItem');

tabsItem.forEach((item, i) => {
  item.addEventListener('click', function (e) {
      e.preventDefault(); /* отменяет обычное поведение элементов в браузере */
      removeActiveClass();
      this.classList.add('active');
      tabsContent[i].classList.add('active');
  })
})

function removeActiveClass() {
  tabsItem.forEach((item, i) => {
    item.classList.remove('active');
    tabsContent[i].classList.remove('active');
  })
}


// * Домашняя работа * 
const btn= document.querySelector('.stopwatch__btn'),
  watchSecond= document.querySelector('.stopwatch__seconds'),
  watchMinute= document.querySelector('.stopwatch__minutes'),
  watchHour= document.querySelector('.stopwatch__hours');

btn.addEventListener('click', function () {
  if(this.innerHTML == 'start'){ 
  this.innerHTML = 'stop';
  let timer = 0
  setTimeout(() => timerWatch(this, timer), 1000)
  }else if(this.innerHTML == 'stop'){
  this.innerHTML = 'reset'
  }else{
  this.innerHTML = 'start'
  watchSecond.innerHTML = 0;
  watchMinute.innerHTML = 0;
  watchHour.innerHTML = 0;
  }
})
function timerWatch (element, i){
  if(element.innerHTML == 'stop'){
  if(i == 60){
  i = 0;
  watchSecond.innerHTML = i;
  if(watchMinute == 59){
  watchMinute.innerHTML = 0;
  watchHour.innerHTML++
  }else {
  watchMinute.innerHTML++
}}else{
  i++
  watchSecond.innerHTML = i;
}
setTimeout(() => timerWatch(element, i), 1000);}
}