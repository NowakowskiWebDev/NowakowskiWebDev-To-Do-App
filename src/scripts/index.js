import {
    elements
} from './base';
import
Items
from './item';
import {
    renderTask
} from './renderTask';

let name;
let category;
let day;

// BUTTON CLASSES NAMES
const CHECK = ".btn--task-done";
const REMOVE = ".btn--task-remove";
const EDIT = ".btn--task-edit";

const getInputs = () => {
    name = elements.inputName.value;
    category = elements.inputCategory.value.toUpperCase();
    day = elements.selectDay.value;
}

const resetInputs = () => {
    elements.inputName.value = '';
    elements.inputCategory.value = '';
    elements.selectDay.value = '';
}

// CREATE TASK AFTER CLICK ON BUTTON
elements.addTaskBtn.addEventListener('click', e => {
    e.preventDefault();

    getInputs();

    if (name && category && day) {
        const newItem = new Items();
        newItem.addItem(name, category, day);
        resetInputs();
        renderTask(name, category, day);
    } else {
        elements.divWarning.classList.add('creation-section__warning--active');
        setTimeout(() => {
            elements.divWarning.classList.remove('creation-section__warning--active')
        }, 2000)
    }
})

// RESTORE TASKS ON PAGE LOAD
window.addEventListener('load', () => {
    const newItem = new Items();
    newItem.readStorage();
    newItem.items.forEach(item => renderTask(item.name, item.category, item.day))
})

// REMOVE TASK 
elements.tasksList.addEventListener('click', (e) => {
    const index = e.target.parentNode.dataset.id;

    const newItem = new Items();

    if (e.target.matches(CHECK)) {
        e.target.parentNode.classList.toggle('task__item--active')

    } else if (e.target.matches(REMOVE)) {

        newItem.deleteItem(index);
        e.target.parentNode.remove();

    } else if (e.target.matches(EDIT)) {

    }
})