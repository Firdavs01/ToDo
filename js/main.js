"use strict";

import { render } from "./render.js";
import { inputElement, addBtnElement } from "./elements.js";
import { readySave } from "./localeStorage.js";
import { tasks } from "./structure.js"; 

render(tasks)

console.log(inputElement, 'working')

inputElement.addEventListener("keydown", (e) => {
    console.log("Ola")
    if (e.key === 'Enter') {
        addBtnElement.click()
    }
})