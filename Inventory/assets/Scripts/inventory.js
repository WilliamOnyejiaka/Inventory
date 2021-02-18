
import DatabaseFunctions from '../Modules/DatabaseFunctions.js';
import {InventoryModalAndOverlayFunctions as InventFuncs} from '../Modules/ModalAndOverlay.js';

DatabaseFunctions.displayItems();
DatabaseFunctions.hiddenItems();
DatabaseFunctions.showNot();

let alertModal = document.getElementById("alert");
let overlay = document.getElementById("alertoverlay");

overlay.addEventListener("click",(e) => {
    if(overlay.classList.contains("active") && alertModal.classList.contains("active")) {
        InventFuncs.removeOverlay();
    }
});

document.querySelector("#ex").addEventListener("click",(e) => {location.reload();});

document.getElementById("print").addEventListener("click",(e) => {window.print();});

document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click",(e) => {
       e.preventDefault();
       InventFuncs.showAlert(`Item ${btn.dataset.itemsTarget} has been deleted`);
       DatabaseFunctions.hideItem(btn.dataset.itemsTarget);
    });
});