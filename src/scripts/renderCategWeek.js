import {
    elements
} from './base';
import
Items
from './item';

const newItem = new Items();
newItem.readStorage();

// Object with key (category/day) and value (array with tasks)
let tasksSort = {};

newItem.items.forEach(item => addItem(item));

function addItem(tab) {
    const variable = elements.categoryLists ? tab.category : tab.day;
    if (!(variable in tasksSort)) {
        tasksSort[variable] = [];
    }
    tasksSort[variable].push(tab);
}


let counter = 0;

export function renderCategoryOrWeek() {
    for (const property in tasksSort) {

        const markupHeading = `
        <li class="sort__item" data-idsort="${counter}">
            <div class="sort-heading">
                <h3 id="sort__task-name" class="sort__heading-tertiary">${property.toUpperCase()}</h3>
            </div>
        </li>
        `;

        if (elements.categoryLists) {
            elements.categoryLists.insertAdjacentHTML('beforeend', markupHeading);
        } else {
            elements.weekLists.insertAdjacentHTML('beforeend', markupHeading);
        }

        tasksSort[property].forEach(item => {

            const flagValue = item.flag;

            const classTrueBox = "sort__box-task sort__box-task--active";
            const classFalseBox = "sort__box-task";

            const classTrueBtnCheck = "btn sort__btn-check sort__btn-check--active";
            const classFalseBtnCheck = "btn sort__btn-check";

            const markupTasks = `
                <div data-idtask="${item.idArray}" data-flag="${flagValue}" class="${flagValue ? classTrueBox : classFalseBox}">
                    <p class="sort__paragraph" id="sort__sort-name">${item.name}</p>
                    <button id="sort-check" class="${flagValue ? classTrueBtnCheck : classFalseBtnCheck}"><i class="fas fa-check-square"></i></button>
                    <button id="sort-remove" class="btn sort__btn-remove"><i class="fas fa-trash"></i></button>
                </div>
            `;

            document.querySelector(`[data-idsort='${counter}']`).insertAdjacentHTML('beforeend', markupTasks);
        })

        counter++;
    }
}

















// DZIAŁĄ
// let counter = 0;

// export function renderCategory() {
//     for (const property in tasksByCategory) {

//         const markupHeading = `
//         <li class="category__item" data-idcategory="${counter}">
//             <div class="category-heading">
//                 <h3 id="category__task-name" class="category__heading-tertiary">${property}</h3>
//                 <button class="btn category__btn-show">X</button>
//             </div>
//         </li>
//         `;

//         elements.categoryLists.insertAdjacentHTML('beforeend', markupHeading);

//         tasksByCategory[property].forEach(item => {

//             const markupTasks = `
//                 <div class="category__box-task">
//                     <p class="category__paragraph" id="category__category-name">${item.name}</p>
//                     <button class="btn category__btn-check"><i class="fas fa-check-square"></i></button>
//                     <button class="btn category__btn-remove"><i class="fas fa-trash"></i></button>
//                 </div>
//             `;

//             document.querySelector(`[data-idcategory='${counter}']`).insertAdjacentHTML('beforeend', markupTasks);
//         })

//         counter++;
//     }
// }