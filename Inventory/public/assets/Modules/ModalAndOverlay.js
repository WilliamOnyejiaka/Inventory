
export class InventoryModalAndOverlayFunctions {
    
    static showAlert(txt,alertModal=document.getElementById("alert"),overlay=document.getElementById("alertoverlay")) {
        alertModal.classList.add("active");
        let modalMessage = alertModal.querySelector("p");
        modalMessage.textContent = txt;
        overlay.classList.add("active");
    }
    
    static removeOverlay(overlay=document.getElementById("alertoverlay"),alertModal=document.getElementById("alert")) {
        overlay.classList.remove("active");
        alertModal.classList.remove("active");
        location.reload();
    }
}

export class IndexModalAndOverlayFunctions {

    static removeAlertModal(alertModal=document.getElementById("alertmodal"),over=document.getElementById("alertoverlay")) {
        over.classList.remove("active");
        alertModal.classList.remove("active");
    }

    static removeSummaryModal(over=document.getElementById("summaryoverlay"),summary=document.getElementById("summary")) {
        over.classList.remove("active");
        summary.classList.remove("active");
    }

    static showAskModal(askmodal=document.getElementById("askmodal"),askoverlay=document.getElementById("askoverlay")) {
        askmodal.classList.add("active");
        askoverlay.classList.add("active");
    }

    static removeAskModal(askoverlay=document.getElementById("askoverlay"),modal=document.getElementById("askmodal")) {
        askoverlay.classList.remove("active");
        modal.classList.remove("active");
    }

    static showAlert(txt,alertModal=document.getElementById("alertmodal"),overlay=document.getElementById("alertoverlay")) {
        alertModal.classList.add("active");
        let modalMessage = alertModal.querySelector("p");
        modalMessage.textContent = txt;
        overlay.classList.add("active");
    }
    
    static showSummary(totalstored,totalquantity,last,removed,total) {
        let itemnum = document.getElementById("itemnum");
        itemnum.textContent = totalstored;
        let tquan = document.getElementById("tquan");
        tquan.textContent = totalquantity;
        let lastentry = document.getElementById("last");
        lastentry.textContent = last;
        let removedItems = document.getElementById("removed");
        removedItems.textContent = removed;
        let totalSpent = document.getElementById("spent");
        totalSpent.textContent = total;
        document.getElementById("summary").classList.add("active");
        document.getElementById("summaryoverlay").classList.add("active");
    }
} 

