import { getDataByName } from "./pokeName.js"
import { getDataByNumber } from "./pokeNumber.js"


function getName() {
    let pokeName = document.getElementById('pokeName').value
    getDataByName(pokeName)
}

function getNumber() {
    getDataByNumber()
}

window.getName = getName;
window.getNumber = getNumber;





