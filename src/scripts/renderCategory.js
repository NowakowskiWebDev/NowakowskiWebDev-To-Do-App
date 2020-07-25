import {
    elements
} from './base';
import
Items
from './item';

const newItem = new Items();
newItem.readStorage();

// Object with key (category) and value (array with tasks)
let tasksByCategory = {};

newItem.items.forEach(item => addItemToCategory(item));

function addItemToCategory(tab) {
    if (!(tab.category in tasksByCategory)) {
        tasksByCategory[tab.category] = [];
    }
    tasksByCategory[tab.category].push(tab);
}


let counter = 0;

export function renderCategory() {
    for (const property in tasksByCategory) {

        const markupHeading = `
        <li class="category__item" data-id="${counter}">
            <div class="category-heading">
                <h3 id="category__task-name" class="category__heading-tertiary">${property}</h3>
                <button class="btn category__btn-show">X</button>
            </div>
        </li>
        `;

        elements.categoryLists.insertAdjacentHTML('beforeend', markupHeading);

        tasksByCategory[property].forEach(item => {

            const markupTasks = `
                <div class="category__box-task">
                    <p class="category__paragraph" id="category__category-name">${item.name}</p>
                    <button class="btn category__btn-check"><i class="fas fa-check-square"></i></button>
                    <button class="btn category__btn-remove"><i class="fas fa-trash"></i></button>
                </div>
            `;

            document.querySelector(`[data-id='${counter}']`).insertAdjacentHTML('beforeend', markupTasks);
        })

        counter++;

    }
}