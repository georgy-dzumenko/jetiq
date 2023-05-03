// import {innerHTML} from "./writeToTeacher";

import Babiuk from "../assets/teachers/babiuk.jpeg"
import Denysiuk from "../assets/teachers/denysiuk.jpeg"
import Kyrylaschuk from "../assets/teachers/kyrylaschuk.jpeg"
import Radomska from "../assets/teachers/radomska.jpeg"
import Voitko from "../assets/teachers/voitko.jpeg"

const teachers = [
    {
      img: Kyrylaschuk,
      name: "Кирилащук Світлана Аналоліївна",
      position: "декан",
    },
    {
      img: Babiuk,
      name: "Бабюк Наталя Петрівна",
      position: "доцент",
    },
    {
      img: Denysiuk,
      name: "Денисюк Алла Василівна",
      position: "асистент"
    },
    {
      img: Voitko,
      name: "Войтко Вікторія Володимирівна",
      position: "доцент"
    },
    {
      img: Radomska,
      name: "Радомська Людмила Анатоліївна",
      position: "доцент"
    }
]

const onClick = (event) => {
    console.log(event.clientX)
}

const onSearch = (event) => {
    // ul.send-message__serched-list
    console.log("a");
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("input.input-container__input").addEventListener("input", onSearch)
    document.querySelector("#send-button").addEventListener("click", onClick);
})
