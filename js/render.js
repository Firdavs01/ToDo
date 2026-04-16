"use strict";

import { saveTasks } from "./localeStorage.js";
import { displayListElement } from "./elements.js";

function render(saveElemnts = []) {
  displayListElement.innerHTML = ``;

  saveElemnts.forEach((task) => {
    const li = document.createElement("li");
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete__btn');
    delBtn.textContent = "delete";

    li.textContent = task.value

    if (task.completed) {
      li.classList.add('completed')
    }

    delBtn.addEventListener("click", () => {

      const index = saveElemnts.findIndex(t => t.id === task.id)

      if (index !== -1) {
        saveElemnts.splice(index, 1)
        saveTasks(saveElemnts)
      }

      render(saveElemnts)
    })
    
    li.appendChild(delBtn)
    displayListElement.appendChild(li)
  });
}

export {render}