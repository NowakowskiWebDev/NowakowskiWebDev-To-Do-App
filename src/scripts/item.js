import {
    elements
} from './base';

export default class Item {
    constructor() {
        this.items = [];
    }


    addItem(name, category, day) {

        const item = {
            name,
            category,
            day
        }

        this.readStorage();

        this.items.push(item);

        this.addToStorage();
    }

    addToStorage() {
        localStorage.setItem('TODO', JSON.stringify(this.items));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('TODO'))

        if (storage) this.items = storage;
    }

}