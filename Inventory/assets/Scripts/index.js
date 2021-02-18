import DatabaseFunctions from '../Modules/DatabaseFunctions.js';
import {Helper as giveID} from '../Modules/Helper.js';
import {IndexModalAndOverlayFunctions as IndexFuncs} from '../Modules/ModalAndOverlay.js';
import Summary from '../Modules/Summary.js'

const itemName = document.getElementById("item-name");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");
const alertModal = document.getElementById("alertmodal");
const summary = document.getElementById("summary");
const closebtn = document.querySelectorAll(".close-btn");
const askmodal = document.getElementById("askmodal");

document.getElementById("details").addEventListener("click",(e) => {Summary.showSummary();});

document.querySelectorAll(".overlay").forEach(over => {
    over.addEventListener("click",(e) => {
        if(over.classList.contains("active") && alertModal.classList.contains("active")) {
            IndexFuncs.removeAlertModal();
        }else if(over.classList.contains("active") && summary.classList.contains("active")){
            IndexFuncs.removeSummaryModal();
        }else if(over.classList.contains("active") && askmodal.classList.contains("active")) {
            IndexFuncs.removeAskModal();
        }
    });
});

closebtn.forEach(btn => {
    btn.addEventListener("click",(e) => { 
        let modal = document.getElementById(btn.dataset.modalTarget);
        if(modal.classList.contains("alertmodal")) {
            IndexFuncs.removeAlertModal();
        }else if(modal.classList.contains("summary")){
            IndexFuncs.removeSummaryModal();
        }else {IndexFuncs.removeAskModal();}
    });
});

price.addEventListener("mouseenter",(e) => {total.value = price.value * quantity.value;});

price.addEventListener("mouseleave",(e) => {total.value = price.value * quantity.value;});

quantity.addEventListener("mouseenter",(e) => {total.value = price.value*quantity.value;});

quantity.addEventListener("mouseleave",(e) => {total.value = price.value * quantity.value;});

document.getElementById("add").addEventListener("click",(e) => {
    e.preventDefault();
    if(itemName.value === "" && Number(price.value) === 0 && Number(quantity.value) === 0) {
        IndexFuncs.showAlert("No values entered.");
    }else if(itemName.value === "" && Number(price.value) === 0) {
        IndexFuncs.showAlert("Item Name and Price has no valid values.");
    }else if(itemName.value === "" && Number(quantity.value) === 0) {
        IndexFuncs.showAlert("Item Name and Quantity has no valid values.");
    }else if(Number(quantity.value) === 0 && Number(price.value) === 0) {
        IndexFuncs.showAlert("Quantity and Price has no valid values.");
    }else if(itemName.value === "") {
        IndexFuncs.showAlert("Item Name has no value.");
    }else if(Number(price.value) === 0) {
        IndexFuncs.showAlert("Price has no valid value.");
    }else if(Number(quantity.value) === 0) {
        IndexFuncs.showAlert("Quantity has no valid value.");
    }else {
        let date = `${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`
        DatabaseFunctions.createItem(itemName,price,quantity,total,date,giveID.giveID());
    }
});

document.querySelectorAll(".asbtns").forEach(btn => {
    btn.addEventListener("click",(e) => {
        if(btn.classList.contains("ok")) {
            localStorage.clear();
            IndexFuncs.removeAskModal();
        }else {IndexFuncs.removeAskModal();}
    });
});

document.getElementById("delete").addEventListener("click",(e) => {IndexFuncs.showAskModal();});
