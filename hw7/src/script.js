import tmp from './templates/tmp.handlebars';


const userProfile = {
    name: "Олександр",          
    age: 30,                     
    isActive: true,             
    email: "oleksandr@example.com", 
    hobbies: ["футбол", "читання", "подорожі"], 
    address: {                   
      city: "Київ",
      postalCode: "01601"
    }
}


const markup = tmp(userProfile);

document.getElementById('program').innerHTML = markup;