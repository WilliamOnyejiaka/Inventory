import inventory from './CreateNewInventory.js';
import createElements from './CreateElements.js'

export default class DatabaseFunctions {

    static createItem(itemName,price,quantity,total,date,id) {
        if(localStorage.getItem("items")) {
            let current = JSON.parse(localStorage.getItem("items"));
            current.push(inventory(itemName.value,price.value,quantity.value,total.value,date,id));
            localStorage.setItem("items",JSON.stringify(current));
        }else {
            let newer = inventory(itemName.value,price.value,quantity.value,total.value,date,id);
            let ar = [newer];
            localStorage.setItem("items",JSON.stringify(ar));
        }
    }

    static displayItems() {
        let number = 1;
        let items = JSON.parse(localStorage.getItem('items'));
        if(items) {
            items.forEach(item => {
                createElements(item,number++);
            });
        }
    }

    static hideItem(item) {
        if(localStorage.getItem("hidden")) {
            let hide = JSON.parse(localStorage.getItem("hidden"));
            hide.push(item);
            localStorage.setItem("hidden",JSON.stringify(hide));
        }else {
            let newhide = [item];
            localStorage.setItem("hidden",JSON.stringify(newhide));
        }
    }
    
    static hiddenItems() {
        if(localStorage.getItem("hidden")) {
            let hidden = JSON.parse(localStorage.getItem("hidden"));
            let items = JSON.parse(localStorage.getItem("items"));
            if(hidden && items) {
                hidden.forEach(element => {
                    document.getElementById(element).style.display = "none";
                });
            }
        }
    }

    static showNot() {
        let intxt = document.getElementById("inventory-txt");
        let print = document.getElementById("print");
        if(localStorage.getItem("hidden") && localStorage.getItem("items")) {
            let itemsAr = JSON.parse(localStorage.getItem("items"));
            let hidden = JSON.parse(localStorage.getItem("hidden"));
            let valid = itemsAr.length - hidden.length;
            console.log(valid)
            if(valid < 1) {
                print.classList.add("on");
                intxt.classList.add("active");
            }else {
                print.classList.remove("on");
                intxt.classList.remove("active")
            }
        }else if(localStorage.length === 0) {
            print.classList.add("on");
            intxt.classList.add("active");
        }else if(localStorage.length === 1) {
            if(JSON.parse(localStorage.getItem("items"))) {
                print.classList.remove("on");
            }else {
                localStorage.removeItem("hidden");
                print.classList.add("on");
                intxt.classList.add("active");
            }
        }
    }   
}