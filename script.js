/*Task 3*/
document.addEventListener('mousemove', 
_.debounce (() => {
console.log('Hello')
}),100)
/*Task 4 */
const searchInputLodash  = document.getElementById('inputLodash')
searchInputLodash.addEventListener('input',
_.throttle(() => {
alert("Hello")
}),500)
/*Креативні завдання */
/*Task 1 */
const searchInput1 = document.getElementById('inputLodash1')
searchInput1.addEventListener('input',
_.debounce(() => {
const searchValue = searchInput1.value
if(searchValue){
    alert(`Вітаємо ${searchValue}!`)
}else {
    searchValue.textContent = " "
    alert(searchValue)
}},500))
/*Task 2 */
const searchCoord = document.getElementById('graph')
const searchPoint = document.getElementById('point')
function updatePosition(event) {
    const rect = searchCoord.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    searchPoint.setAttribute('cx', x);
    searchPoint.setAttribute('cy', y);
  }
 const throttlePosition = _.throttle(updatePosition,50)
 document.addEventListener('mousemove',throttlePosition)
/*Домашнє завдання */
/*Task 1 */
const searchInput = document.querySelector('.slider__input')
const searchBoxInput = document.querySelector('.slider__image')
searchInput.addEventListener('input',
_.debounce(() => {
const searchValueInput = searchInput.value
const searchInputWidth = (searchValueInput * 3) + 'px'
searchBoxInput.style.width = searchInputWidth
}),500)
/*Task 2 */
const searchBox = document.getElementById('box')
document.addEventListener('mousemove',
_.debounce((event) => {
const x = event.clientX;
const y = event.clientY
searchBox.style.position = "relative"
searchBox.style.left = `${x}` + 'px'
searchBox.style.top = `${y}` + 'px'
}),100)