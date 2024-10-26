



/*Task 1*/
let promise1 = Promise.resolve('success1').then(value => console.log(value)).catch(error => console.log(error))
let promise2 = new Promise(resolve => resolve('success2')).then(value => console.log(value)).catch(error => console.log(error))
let promise3 = new Promise(resolve => { setTimeout(() => { resolve('success3') }, 2000) }).then(value => console.log(value)).catch(error => console.log(error))
Promise.all([promise1, promise2, promise3])


/*Task 2 */

function randomTime(text, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text)
        }, time)
    })

}
const promiseA = randomTime('Hello fast', 6000)
const promiseB = randomTime('Goodbye fast', 5000)
Promise.race([promiseA, promiseB])
    .then(value => console.log(value))
    .catch(error => console.log(error))

/*Task 3 */
Promise.reject('success 4').catch(error => console.log(error))
/*Creative tasks */

/*Task 2*/
function rejectWithError(errorMessage) {
    return Promise.reject(errorMessage)
}
const errorMessage = 'Something went wrong';
rejectWithError(errorMessage)

    .catch((error) => {

        console.error(error);

    });
/*Домашннє завдання*/
/*Task 1 */
function delayedPromise(value, delay) {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
    )
}
let promiseAdd = delayedPromise(12 + 3, 1000)
let promiseMinus = delayedPromise(12 - 3, 6000)
let promiseMultiply = delayedPromise(12 * 3, 4000)
let promiseDivide = delayedPromise(12 / 3, 5000)
let promiseDivideAdd = delayedPromise(12 / 3 + 3, 2000)
Promise.all([promiseAdd, promiseMinus, promiseMultiply, promiseDivide, promiseDivideAdd])
    .then(action => (console.log(action)))
    .catch(erorr => console.log(erorr))
/*Task 2 */

function randomDelay(text, delay) {
    return Promise.resolve(setTimeout(() => {
        console.log(text)
    }, delay))
}
let text1 = randomDelay('Hello,', 1000)
let text2 = randomDelay('are', 3000)
let text3 = randomDelay("how", 2000)
let text4 = randomDelay("?", 5000)
let text5 = randomDelay("you", 4000)
Promise.race([text1, text2, text3, text4, text5]).then(text => console.log(text))

