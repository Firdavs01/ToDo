"use strict";

import { saveTasks } from "./localeStorage.js";
import { displayListElement } from "./elements.js";

function render(saveElemnts = []) {
  displayListElement.innerHTML = ``;

  saveElemnts.forEach((task) => {
    const li = document.createElement("li");
    const delBtn = document.createElement('button');
    const completedBtn = document.createElement('button');
    delBtn.classList.add('delete__btn');
    delBtn.textContent = "delete";
    completedBtn.textContent = 'X'

    li.textContent = task.value

    
    completedBtn.addEventListener("click", () => {
      li.classList.add('completed')
      task.completed = true
    })

    delBtn.addEventListener("click", () => {

      const index = saveElemnts.findIndex(t => t.id === task.id)

      if (index !== -1) {
        saveElemnts.splice(index, 1)
        saveTasks(saveElemnts)
      }

      render(saveElemnts)
    })
    
    li.appendChild(delBtn)
    li.appendChild(completedBtn)
    displayListElement.appendChild(li)
  });
}

export {render}