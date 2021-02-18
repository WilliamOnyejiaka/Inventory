import {Helper} from './Helper.js';

const body = document.querySelector("body");

export default function createElements(item,number) {
    let mainDiv = document.createElement("div");
    let h1 = document.createElement("h1");
    let main = document.createElement("main");
    let itemcontainer = document.createElement("div");

    let datediv = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");

    let h3date = document.createElement("h3")
    let h3date1 = document.createElement("h3");
    let h31 = document.createElement("h3");
    let h311 = document.createElement("h3");
    let h32 = document.createElement("h3");
    let h322= document.createElement("h3");
    let h33 = document.createElement("h3");
    let h333 = document.createElement("h3");
    let h34 = document.createElement("h3");
    let h344 = document.createElement("h3");

    h3date.className = "label";
    h3date1.className = "label";
    h31.className = "label";
    h311.className = "label";
    h32.className = "label";
    h322.className = "label";
    h33.className = "label";
    h333.className = "label";
    h34.className = "label";
    h344.className = "label";

    h1.textContent = `Item ${number}`
    mainDiv.className = "items";
    mainDiv.id = number.toString();
    datediv.className = "item-control";
    div1.className = "item-control";
    div2.className = "item-control";
    div3.className = "item-control";
    div4.className = "item-control";

    h3date.textContent = "Date Created: "
    h3date1.textContent = item.date;

    h31.textContent = "Item Name: ";
    h311.textContent = Helper.firstCharToUpper(item.item);

    h32.textContent = "Price: ";
    h322.textContent = item.price;

    h33.textContent = "Item Quantity: ";
    h333.textContent = item.quantity;

    h34.textContent = "Total Value: ";
    h344.textContent = item.total;

    datediv.appendChild(h3date);
    datediv.appendChild(h3date1);

    div1.appendChild(h31);
    div1.appendChild(h311);

    div2.appendChild(h32);
    div2.appendChild(h322);

    div3.appendChild(h33);
    div3.appendChild(h333);

    div4.appendChild(h34);
    div4.appendChild(h344);

    itemcontainer.className = "item-container";
    itemcontainer.appendChild(datediv);
    itemcontainer.appendChild(div1);
    itemcontainer.appendChild(div2);
    itemcontainer.appendChild(div3);
    itemcontainer.appendChild(div4);

    let btn = document.createElement("button");
    btn.setAttribute("data-items-target",number.toString());
    btn.className = "delete-btn"
    btn.textContent = "Delete Item";
    let btnDiv = document.createElement("div");
    btnDiv.className = "item-control";

    btnDiv.appendChild(btn);
    itemcontainer.appendChild(btnDiv);

    main.appendChild(itemcontainer);
    mainDiv.appendChild(h1);
    mainDiv.appendChild(main);

    body.insertBefore(mainDiv,document.getElementById("print"));
}