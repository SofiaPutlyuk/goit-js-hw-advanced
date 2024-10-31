const searchNameInput = document.getElementById('nameInput');
const searchSurnameInput = document.getElementById('surnameInput');
const searchAgeInput = document.getElementById('ageInput');
const searchCoursesInput = document.getElementById('courseInput');
const searchFacultyInput = document.getElementById('facultyInput');
const searchButtonResult = document.getElementById("showInfo");
searchButtonResult.addEventListener('click', function () {
    const searchNameValue = searchNameInput.value;
    const searchSurnameValue = searchSurnameInput.value;
    const searchAgeValue = searchAgeInput.value;
    const searchCoursesValue = searchCoursesInput.value;

    const info = {
        name: searchNameValue,
        surname: searchSurnameValue,
        age: searchAgeValue,
        course: searchCoursesValue,
        faculty: searchFacultyInput,

    };
    if (!info.name || !info.surname || !info.age || !info.course) {
        alert("Заповніть поля");
        return;
    }
    localStorage.setItem('info', JSON.stringify(info));
    console.log(info);

    showInfo();
});

function showInfo() {
    const students = JSON.parse(localStorage.getItem('info')) || {};
    console.log(students);

    const createTable = document.createElement('table');
    createTable.innerHTML = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Course</th>
                <th>Faculty</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${students.name}</td>
                <td>${students.surname}</td>
                <td>${students.age}</td>
                <td>${students.course}</td>
                <td>${students.faculty}</td>
            </tr>
        </tbody>
    `;
    document.body.appendChild(createTable);
}


const searchButtonUpdate = document.getElementById('buttonUpdate');
searchButtonUpdate.addEventListener('click', function () {
    check();
});

function check() {
    const createModal = document.createElement('div');
    const createContent = document.createElement('div');
    createModal.classList.add('modal')
    createContent.classList.add("modal-content")

    const searchNameValue = searchNameInput.value;
    const searchSurnameValue = searchSurnameInput.value;
    const searchAgeValue = searchAgeInput.value;
    const searchCoursesValue = searchCoursesInput.value;

    const createInputName = document.createElement('input');
    createInputName.value = searchNameValue;

    const createInputSurname = document.createElement('input');
    createInputSurname.value = searchSurnameValue;

    const createInputAge = document.createElement('input');
    createInputAge.value = searchAgeValue;

    const createInputCourses = document.createElement('input');
    createInputCourses.value = searchCoursesValue;

    createContent.appendChild(createInputName);
    createContent.appendChild(createInputSurname);
    createContent.appendChild(createInputAge);
    createContent.appendChild(createInputCourses);

    createModal.appendChild(createContent);
    document.body.appendChild(createModal);

    const createButtonSave = document.createElement('button');
    createButtonSave.textContent = "Зберегти зміни";
    createContent.appendChild(createButtonSave);

    createButtonSave.addEventListener('click', function () {
        const updatedInfo = {
            name: createInputName.value,
            surname: createInputSurname.value,
            age: createInputAge.value,
            course: createInputCourses.value,
        };
        localStorage.setItem('info', JSON.stringify(updatedInfo));
        showInfo();
        document.body.removeChild(createModal);
    });

    createModal.appendChild(createContent);
    document.body.appendChild(createModal);
}


function searchStudent() {
    const students = JSON.parse(localStorage.getItem('info')) || {};
    if (searchNameInput.value === students.name) {
        alert("Такий студент існує !");
    } else {
        alert("Такого студента не існує!");
    }
}

showInfo();
/*Я хоьіла таким чином : 
   fetch('students.json')
        .then(response => response.json())
        .then(data => {
            data.push(info);
            return fetch('students.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        })
        .then(() => showInfo())
        .catch(err => console.error(err));
});*/
/*fetch - означає що ми кидаєио запит до файлу student.json 
.then(response => response.json()) -  коли відповідь отримана, вона перетворюється в формат JSON , щоб ми могли прцювати як об'єктом
data -  В об'єкт data, який є масивом студентів, додається новий студент
PUT - вказує, що ми оновлюємо дані.(це є метод)
headers: { 'Content-Type': 'application/json' } - заголовок, який вказує, що дані, які ми відправляємо, у форматі JSON.
body: JSON.stringify(data) - дані, які ми відправляємо, перетворюються у формат JSON.
*/
