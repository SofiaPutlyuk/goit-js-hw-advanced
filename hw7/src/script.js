import tmp from './templates/tmp.handlebars';

const userProfile = [
  {
    name: "Олександр",
    age: 30,
    isActive: true,
    email: "oleksandr@example.com",
    hobbies: ["футбол", "читання", "подорожі"],
    address: {
      city: "Київ",
      postalCode: "01601"
    }
  },
  {
    name: "Марія",
    age: 25,
    isActive: false,
    email: "maria@example.com",
    hobbies: ["музика", "танці"],
    address: {
      city: "Львів",
      postalCode: "79000"
    }
  },
  {
    name: "Петро",
    age: 35,
    isActive: true,
    email: "petro@example.com",
    hobbies: ["спорт", "подорожі"],
    address: {
      city: "Одеса",
      postalCode: "65000"
    }
  }
];
const searchButton = document.getElementById("sortButton")
searchButton.addEventListener('click',function(){
  const sortNames = [...userProfile].sort((a,b) =>{
   return a.name.localeCompare(b.name);
  })
  usersRender(sortNames)
})
function usersRender(users){
  const markup = tmp(users);
console.log(markup)
  document.getElementById('program').innerHTML = markup;
}
usersRender(userProfile)

