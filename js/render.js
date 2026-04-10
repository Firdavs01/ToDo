"use strict";

import { tasks } from "./structure.js";
import { displayListElement } from "./elements.js";

function render() {
  displayListElement.innerHTML = ``;

  tasks.forEach((task) => {
    const li = document.createElement("li");
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete__btn');
    delBtn.textContent = "delete";

    li.textContent = task.value

    if (task.completed) {
      li.classList.add('completed')
    }

    delBtn.addEventListener("click", () => {

      const index = tasks.findIndex(t => t.id === task.id)

      if (index !== -1) {
        tasks.splice(index, 1)
      }

      render()
    })
    
    li.appendChild(delBtn)
    displayListElement.appendChild(li)
  });
}

export {render}