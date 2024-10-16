

/*Task 1 */
let message = 1;
const timerMessage = setInterval(() => {
message+=1
console.log('Message' , message)
if(message > 5){
console.log('aaa')
clearInterval(timerMessage)
}

},3000)
/*Task 2 */
const searchBoxes = document.querySelectorAll("div")
function renderColor(){
    const r = Math.floor(Math.random()*255)
    const  g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`;
}

let size =10;
const timer = setInterval(() => {
size+=5
console.log(size)
searchBoxes.forEach(box => {
    box.style.background = renderColor()
    box.style.width = size + 'px'
    box.style.height = size + 'px'

})
if(size > 100){
    clearInterval(timer)
}
},1000)
/*Task 3*/
const searchButtons = document.querySelectorAll('.buttonGame');
let points = 0;
let clicks = 0;
function addPoint() {
    points += 10;
    clicks++;
    alert(`Очки: ${points}, Кліки: ${clicks}`);
}

searchButtons.forEach(button => {
    button.addEventListener('click', addPoint);
});


setInterval(() => {
    alert(`Гра закінчена! Ваші очки: ${points}, Загальна кількість кліків: ${clicks}`);
}, 30000); 


/*Task 4 */
const searchInputNumber = document.getElementById('timerInput')
const searchSetButton = document.getElementById("timeButton")
searchSetButton.addEventListener('click',function(){
    const searchTime = Number(parseInt(searchInputNumber.value))
    const getSecond = searchTime * 1000;
    console.log(getSecond)
    setTimeout(() => {
     alert('Hello')
    },getSecond)
})

