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

        renderTask(name, category, day)
    } else {
        console.log('siema')
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