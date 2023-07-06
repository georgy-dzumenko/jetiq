// СПИСОК ОПЦІЙ СЕРЕД ВИКЛАДАЧІВ, ТОБІ ПОТРІБНО ЗРОБИТИ АНАЛОГІЧНО В TOGROUPS
const teachers = [
    {
      img: "../assets/teachers/kyrylaschuk.jpeg",
      name: "Кирилащук Світлана Аналоліївна",
      position: "декан",
      id: 1
    },
    {
      img: "../assets/teachers/babiuk.jpeg",
      name: "Бабюк Наталя Петрівна",
      position: "доцент",
      id: 2
    },
    {
      img: "../assets/teachers/denysiuk.jpeg",
      name: "Денисюк Алла Василівна",
      position: "асистент",
      id: 3
    },
    {
      img: "../assets/teachers/voitko.jpeg",
      name: "Войтко Вікторія Володимирівна",
      position: "доцент",
      id: 4
    },
    {
      img: "../assets/teachers/radomska.jpeg",
      name: "Радомська Людмила Анатоліївна",
      position: "доцент",
      id: 5
    }
]

// НЕ ПАМ'ЯТАЮ НАШО ЦЕ, МАБУТЬ ЯКИЙСЬ ДЕБАГ :)
const onClick = (event) => {
    event.preventDefault();
    console.log(event.clientX);
}

// ЗМІННА НА ПОЗНАЧЕННЯ ОБРАНОГО ІД ВИКЛАДАЧА
let selectedId = null;


// ФУНКЦІЯ ДЛЯ СКИДАННЯ ОБРАНОГО ІД ВИКЛАДАЧА
function closeButtonCallback(event) {
  event.preventDefault();
  document.querySelector(".send-message__to-whom input.input-container__input").focus();
  const selectedTeacherEl = document.querySelector(".send-message__to-whom-selected");
  selectedId = null;
  selectedTeacherEl.style.display = "none";
  selectedTeacherEl.innerHTML = ``
};

// ФУНКЦІЯ ДЛЯ ОБРАННЯ ІД ВИКЛАДАЧА. ЗВЕРНИ УВАГУ, ПРИ ЗМІНАХ ЛОГІКИ, В ЦЬОМУ ПРИКЛАДІ ПРИ ОБРАННІ ІД ПОТРІБНО ОНОВЛЮВАТИ ВЕРСТКУ В РУЧНУ, РЕАКТ ЦЕ РОБИТЬ АВТОМАТИЧНО АЛЕ МИ Ж САМІ УМНІ
const onTeacherClick = ({newId}) => (event) => {
  event.preventDefault()
  const selectedTeacherEl = document.querySelector(".send-message__to-whom-selected");
  console.log(newId)
  selectedId = newId;
  selectedTeacherEl.style.display = "flex";
  const teacherObj = teachers.find(({id}) => id === selectedId);
  selectedTeacherEl.innerHTML = `
    <img src=${teacherObj.img} alt="" class="send-message__to-whom-selected-img">
    <div class="send-message__to-whom-selected-data">
        <div class="send-message__to-whom-selected-name">${teacherObj.name}</div>
        <div class="send-message__to-whom-selected-position">${teacherObj.position}</div>
        <a class="send-message__to-whom-selected-close"></a>
    </div>
  `

  document.querySelector(".send-message__to-whom-selected-close").onclick = closeButtonCallback;
}

// *1 ФУНКЦІЯ ЩО ПЕРЕТВОРЮЄ ОБ'ЄКТ ВЧИТЕЛЯ (НА ПРАКТИЦІ З МАСИВУ ЩО СТВОРЕНО НА ПОЧАТКУ ФАЙЛУ) ЯКИЙ ПЕРЕДАЄТЬСЯ ЯК АРГУМЕНТ, В ХТМЛ ЕЛЕМЕНТ ЯКИЙ ВІДОБРАЖАТИМЕТЬСЯ ПРИ ПОШУКУ ВИКЛАДАЧА В СПИСКУ
const createTeacherElement = ({img, name, position, id}) => {
    const el = document.createElement("li");
    el.onclick = onTeacherClick({newId: id});
    el.className = "send-message__teacher";
    el.innerHTML = `
        <img class="send-message__teacher-photo" src="${img}"></img>
        <div class="send-message__teacher-data">
            <span class="send-message__teacher-name">${name}</span>
            <span class="send-message__teacher-position">${position}</span>
        </div>
    `

    return el;
}

// ФУНКЦІОНАЛ ПОШУКУ, ФІЛЬТРУЄ ПОТРІБНИХ ВИКЛАДАЧІВ ВІДПОВІДНО ДО ПЕРЕДАНОГО В ІНПУТ ЗНАЧЕННЯ І ПЕРЕТВОРЮЄ В ХТМЛ ЕЛЕМЕНТ [ДИВ *1]
const onSearch = (event) => {
    document.querySelector("ul.send-message__serched-list").innerHTML = "";
    teachers.filter((a) => a.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())).forEach((a) => {
        document.querySelector("ul.send-message__serched-list").appendChild(createTeacherElement(a));
    })
}

// ФУНКЦІОНАЛ ЩО ВИКОНУЄТЬСЯ ПРИ ЗАВАНТАЖЕННІ ДАНИХ СТОРІНКИ, ТОБТО НА ПОЧАТКУ ВИКОНАННЯ ПРОГРАМИ
document.addEventListener("DOMContentLoaded", function() {
    // ОТРИМАННЯ ГОЛОВНИХ КЕРІВНИХ ЕЛЕМЕНТІВ СТОРІНКИ ДЛЯ КОНТРОЛЮ
    const searchInput = document.querySelector(".send-message__to-whom input.input-container__input");
    const searchedList = document.querySelector("ul.send-message__serched-list")

    // ПЕРЕДАВАННЯ ВИЩЕОПИСАНИХ КОЛБЕКІВ ВІДПОВІДНИМ ЕЛЕМЕНТАМ НА ВІДПОВІДНІ ПОДІЇ
    searchInput.addEventListener("input", onSearch);
    searchInput.addEventListener("focus", (event) => {
      event.preventDefault();
      searchedList.style.display = "block"
    });
    searchInput.addEventListener("blur", (event) => {
      event.preventDefault();
      setTimeout(() => {
        console.log("none")
        searchedList.style.display = "none"
      }, 500);
    });
    document.querySelector("#send-button").addEventListener("click", onClick);
})
