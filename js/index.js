import {innerHTML} from "./writeToTeacher";

document.addEventListener("DOMContentLoaded", function() {
    const rootDiv = document.getElementById("root");
    rootDiv.innerHTML = innerHTML;
})
