
const  searchButton = document.getElementById('formButton')
searchButton.addEventListener('click',function(){
    alert('Hello World!')
})
const searchButtonSend = document.getElementById("buttonSend")
searchButtonSend.addEventListener('click',function(event){
    event.preventDefault()
    const searchName = document.getElementById('inputName')
    const searchEmail = document.getElementById('inputEmail')
    const searchNameValue = searchName.value
    const searchEmailValue = searchEmail.value
    if (searchNameValue === "" || searchEmailValue === "") {
        alert("Заповніть обидва поля!");
    } else if (!searchEmailValue.includes('@')) {
        alert("Уведіть правильно електронну пошту!");
    } else {
        alert("Успішно!");
        searchName.value = "";
        searchEmail.value = "";
    }
})
 

