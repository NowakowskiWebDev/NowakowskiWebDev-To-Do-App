import {
    elements
} from './base';

let flag;

export default class Item {
    constructor() {
        this.items = [];
    }


    addItem(name, category, day, flag = false) {

        this.readStorage();

        const idArray = this.items.length;

        const item = {
            name,
            category,
            day,
            flag,
            idArray
        }


        this.items.push(item);

        this.addToStorage();
    }

    deleteItem(currentID) {
        this.readStorage();

        this.items.splice(currentID, 1);
        this.renderId();
        this.addToStorage();
    }

    addToStorage() {
        localStorage.setItem('TODO', JSON.stringify(this.items));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('TODO'))

        if (storage) this.items = storage;
    }

    changeFlagTask(currentID) {
        this.readStorage()

        this.items[currentID].flag = this.items[currentID].flag ? false : true;

        this.addToStorage();
    }


    renderId() {
        let counter = 0;

        this.items.forEach(item => {
            item.idArray = counter;
            counter++;
        })
    }



}