/*Task 1 */
let minute = 60;
const halfHour = minute / 2;
let secondTimeUp = minute * 60;
const timerAmount = setInterval(() => {
    secondTimeUp -= 60
    if (secondTimeUp === halfHour * 60) {
        alert('Hello')
    }
    if (secondTimeUp === 0) {
        alert('Час вийшов!')
        clearInterval(timerAmount)
    }
}, 60000)
/*Task 2 */
const searchButton = document.getElementById('buttonActive')
const second = 30;
let milisecond = second * 1000;
function randomColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`;
}
const timerMilisecond = setInterval(() => {
    milisecond -= 1

    if (milisecond <= 10 * 1000) {
        searchButton.style.background = randomColor()
    }
    if (milisecond === 0) {
        searchButton.style.background = '';
        alert('Time up')
        clearInterval(timerMilisecond)
    }
}, 1)