"use strict";

import { tasks } from "./structure.js";
import { displayListElement } from "./elements.js";

function render() {
    displayListElement.innerHTML = ``
  tasks.forEach((task) => {
    const li = document.createElement("li")
    li.textContent = task.value

    if (task.completed) {
        li.classList.add('completed')
    }

    displayListElement.appendChild(li)
  });
}

export {render}