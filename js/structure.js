"use strict";

import { inputElement, addBtnElement, displayListElement} from "./elements.js";
import { render } from "./render.js";
import { readySave, saveTasks } from "./localeStorage.js";

let tasks = [...readySave]

render(tasks)

addBtnElement.addEventListener("click", () => {
    if (inputElement.value === "") return;
    
    const dataInfo = {
        id: Date.now(),
        value: inputElement.value,
        completed: false,   
    }
    
    tasks.push(dataInfo)
    
    console.log("array before saving", tasks)
    saveTasks(tasks)

    inputElement.value = ""
    render(tasks)
})

export {tasks}