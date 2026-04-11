"use strict";

import { render } from "./render.js";
import { inputElement, addBtnElement } from "./elements.js";


console.log(inputElement, 'working')

inputElement.addEventListener("keydown", (e) => {
    console.log("Ola")
    if (e.key === 'Enter') {
        addBtnElement.click()
        render()
    }
})