"use strict";

import { inputElement, addBtnElement, displayListElement} from "./elements.js";
import { render } from "./render.js";

let tasks = []

addBtnElement.addEventListener("click", () => {
    if (inputElement.value === "") return;

    const dataInfo = {
        id: Date.now(),
        value: inputElement.value,
        completed: false,   
    }

    tasks.push(dataInfo)
    inputElement.value = ""
    render()
})

export {tasks}