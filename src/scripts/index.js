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
    category = elements.inputCategory.value;
    day = elements.selectDay.value;
}

const resetInputs = () => {
    elements.inputName.value = '';
    elements.inputCategory.value = '';
    elements.selectDay.value = '';
}


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