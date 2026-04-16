"use strict";

const saveTasks = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data))
}


let readySave = []
const rawData = localStorage.getItem("tasks")

try {
    readySave = rawData ? JSON.parse(rawData) : [];
} catch(err) {
    console.log("Ошибка парсинга JSON, очищаем хранилища:", err)
    readySave = []
}

export { readySave, saveTasks}