import {
    elements
} from './base';

let counter = 0;

export function renderTask(nameValue, categoryValue, dayValue) {
    const markup = `
        <li class="task__item" data-id=${counter} data-day=${dayValue}>
            <div class="task__values">
                <p id="product-name" class="task__item-name">${nameValue}</p>
                <p class="task__item-category">${categoryValue}</p>
            </div>
            <button class="btn btn--task-done">zrobione</button>
            <button class="btn btn--task-remove">usuń</button>
            <button class="btn btn--task-edit">edytuj</button>
        </li>
            `;
    elements.tasksList.insertAdjacentHTML('beforeend', markup);
    counter++;
}