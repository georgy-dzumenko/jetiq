// import {innerHTML} from "./writeToTeacher";

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

const onClick = (event) => {
    event.preventDefault();
    console.log(event.clientX);
}

let selectedId = null;

const onTeacherClick = ({id}) => () => {
    selectedId = id;
}

const createTeacherElement = ({img, name, position, id}) => {
    const el = document.createElement("li");
    el.onclick = onTeacherClick({id});
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

const onSearch = (event) => {
    // console.log(teachers.filter((a) => a.name.includes(event.target.value)))
    // console.log("a")
    document.querySelector("ul.send-message__serched-list").innerHTML = "";
    teachers.filter((a) => a.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())).forEach((a) => {
        document.querySelector("ul.send-message__serched-list").appendChild(createTeacherElement(a));
    })
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("input.input-container__input").addEventListener("input", onSearch);
    document.querySelector("#send-button").addEventListener("click", onClick);
})
