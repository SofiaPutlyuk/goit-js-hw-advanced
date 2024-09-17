import { information } from "./data-infornation"
const searchForm = document.getElementById('formInput')
const searchButton = document.getElementById('buttonSubmit')
searchForm.addEventListener('submit', function(e){
    e.preventDefault()
})
searchButton.addEventListener('click',function(){
    const searchNameInput = document.getElementById('nameInput')
    const searchEmailInput = document.getElementById('emailInput')
    const searchMessageInput = document.getElementById('messageInput')
    const searchValueName = searchNameInput.value
    const searchValueEmail = searchEmailInput.value
    const searchValueMessage = searchMessageInput.value
    information.name = searchValueName
    information.email = searchValueEmail
    information.message = searchValueMessage
    console.log(information)
if(searchValueName && searchValueEmail && searchValueMessage){
    alert('Успішно відправлено');
   searchNameInput.value = '';
   searchEmailInput.value = '';;
   searchMessageInput.value = ''

} else  {
    alert('Заповніть поля!')
}
})