/*Task  1*/
const searchbuttonAdd = document.getElementById("buttonTask")
const searchBoxTasks = document.getElementById('taskBox')
searchbuttonAdd.addEventListener('click', function () {
  const searchInputTask = document.getElementById('inputTask')
  const searchValueInput = searchInputTask.value
  if (searchValueInput) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = {
      task: searchValueInput
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks));
    searchInputTask.value = ""
    displayTasks(tasks)
  }

})
function displayTasks(tasks) {
  searchBoxTasks.innerHTML = '';
  tasks.forEach((item,index )=> {
    const task = document.createElement('p')
    task.textContent = `Завдання:${item.task}`
    const createCheckInput = document.createElement('input')
    createCheckInput.type = 'checkbox'
    createCheckInput.checked = item.completed
    createCheckInput.addEventListener('click',function(){
      item.completed = createCheckInput.checked;
      tasks[index] = item;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    })
    task.appendChild(createCheckInput)
    searchBoxTasks.appendChild(task)
  })
}
document.addEventListener('DOMContentLoaded', function () {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  displayTasks(storedTasks)
})/*Task 2 */
const searchInput1 = document.getElementById("input1")
const searchInput2 = document.getElementById("input2")
searchInput1.addEventListener('input', function () {
  const searchValue1 = searchInput1.value
  localStorage.setItem('value1', searchValue1)
})
searchInput2.addEventListener('input', function () {
  const searchValue2 = searchInput2.value
  localStorage.setItem('value2', searchValue2)
})
const getValue1 = localStorage.getItem('value1')
const getValue2 = localStorage.getItem('value2')
if (getValue1) {
  searchInput1.value = getValue1
}
if (getValue2) {
  searchInput2.value = getValue2
}
/*Task 3 */
const boxBookmark = document.getElementById('boxBookmark');
const searchButtonLink = document.getElementById("linkButton");

searchButtonLink.addEventListener('click', function () {
  const searchInputLink = document.getElementById("addLink");
  const searchInputValue = searchInputLink.value;

  if (searchInputValue) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmark = {
      bookmark: searchInputValue
    };

    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    searchInputLink.value = "";
    displayBookmark(bookmarks);
  }
});

function displayBookmark(bookmark) {
  boxBookmark.innerHTML = '';

  bookmark.forEach(mark => {
    const createLink = document.createElement('a');
    createLink.href = mark.bookmark;
    createLink.textContent = mark.bookmark;
    createLink.target = '_blank';
    boxBookmark.appendChild(createLink);
    boxBookmark.appendChild(document.createElement('br'));
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  displayBookmark(storedBookmarks);
});

/*Task 4 */
const addButton = document.getElementById('buttonAdd')
const boxInfo = document.getElementById('infoBox')
const searchbutton = document.getElementById('buttonAdd')
searchbutton.addEventListener('click', function () {
  const searchInputName = document.getElementById("nameInput")
  const searchValueName = searchInputName.value
  const searchInputSurname = document.getElementById("nameInput")
  const searchValueSurname = searchInputSurname.value
  const searchInputTel = document.getElementById("nameInput")
  const searchValueTel = searchInputTel.value
  const searchInputEmail = document.getElementById("nameInput")
  const searchValueEmail = searchInputEmail.value
  if (searchValueName && searchValueSurname && searchValueTel && searchValueEmail) {
    let records = JSON.parse(localStorage.getItem('records')) || [];
    const newRecord = {
      name: searchValueName,
      surname: searchValueSurname,
      tel: searchValueTel,
      email: searchValueEmail
    };
    records.push(newRecord);
    localStorage.setItem('records', JSON.stringify(records));
    searchInputName.value = '';
    searchInputSurname.value = '';
    searchInputTel.value = '';
    searchInputEmail.value = '';
    show(records);
  }
})
function show(records) {
  boxInfo.innerHTML = ''
  records.forEach(record => {
    const createRecord = document.createElement('p');
    createRecord.textContent = `Телефон:${record.name} Прізвище:${record.surname}, Тел: ${record.tel}, Email: ${record.email}`;
    boxInfo.appendChild(createRecord)
  });
}
document.addEventListener('DOMContentLoaded', function () {
  const storeRecords = JSON.parse(localStorage.getItem('records')) || [];
  show(storeRecords)
})
