/*Task 1 */
let timer = 60;
const halfHour = timer / 2;
let second = timer * 60;
const timerAmount =  setInterval(() => {
second -=60
if(second === halfHour * 60){
alert('Hello')
}
if(second <= 0){
    alert('Час вийшов!')
    clearInterval(timerAmount)
}
},60000)
/*Task 2 */
const searchButton = document.getElementById('buttonActive')
const secondNew = 30;
let milisecond = secondNew * 1000;
function randomColor(){
const r = Math.floor(Math.random() * 255)
const g = Math.floor(Math.random() * 255)
const b = Math.floor(Math.random() * 255)
return `rgb(${r},${g},${b})`;
}
const timerMilisecond = setInterval(() => {
milisecond -=1

if(milisecond <= 10*1000){
searchButton.style.background=  randomColor()
}
if(milisecond <= 0){
    searchButton.style.background = '';
    alert('Time up')
    clearInterval(timerMilisecond)
}
},1)