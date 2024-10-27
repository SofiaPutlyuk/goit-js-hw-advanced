/*Task 1*/
import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';

import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

const keys = ['a','b','c','d','e','Enter','ArrowUp','ArrowDown','ArrowLeft','ArrowRight']
let currentKeyIndex = 0;
let key = ''
function randomKey(){
    if(currentKeyIndex < keys.length){
        key = keys[currentKeyIndex]
        const searchKeyId = document.getElementById('key')
        searchKeyId.innerHTML = `${key}`
        console.log(key)
    }else {
        const mySuccess = success({

            text: "Вітаємо! Ви пройшли гру!",
            
            });
    }
  
}


document.addEventListener('keydown',function(e){

    if(e.key === currentKeyIndex){
        const mySuccess = success({

            text: "Правильно!",
            
            });
      currentKeyIndex++
      randomKey()
         
    }else {
        const myError = error({

            text: "I'm an error message.",
            
            });
    }
})
document.addEventListener('keydown',function(e){
e.preventDefault()
})
const searchGameButton = document.getElementById("newGame")
searchGameButton.addEventListener('click' , function(){
    currentKeyIndex = 0;
    randomKey()
    const mySuccess = notice({

        text: "Гру розпочато! Натисніть клавішу."
        
        });
})
randomKey()
/*Task 2 */
const searchDiagram = document.getElementById('sales-chart')
const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        borderWidth: 1,
      },
    ],

}
    const config = {
        type: 'bar',
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: false,
            }
          }
        },
      };
  
  const salesChart = new Chart(searchDiagram,config);
