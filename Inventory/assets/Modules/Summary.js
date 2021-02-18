import {IndexModalAndOverlayFunctions as IndexFuncs} from './ModalAndOverlay.js';

export default class Summary {

    static showSummary() {
        let items = JSON.parse(localStorage.getItem("items"));
        let hidden = JSON.parse(localStorage.getItem("hidden"));
        let isHidden = Array();
        let notHidden = Array();
        let totalstored = 0;
        let totalquantity = 0;
        let total = 0;
        
        if(items && hidden) {
            if((items.length-hidden.length) <= 0) {
                IndexFuncs.showAlert("Your inventory is empty.");
            }else {
                for(let i = 0;i < hidden.length;i++) {
                    isHidden.push(items[(Number(hidden[i])-1)].id);
                }
    
                items.forEach(item => {
                    if(!(isHidden.includes(item.id))) {
                        notHidden.push(item);
                    }
                });
    
                notHidden.forEach(not => {
                    totalstored++;
                    totalquantity += Number(not.quantity);
                    total += Number(not.total);
                });
                IndexFuncs.showSummary(totalstored,totalquantity,notHidden[notHidden.length-1].date,isHidden.length,total);
            }
        }else if(items) {
            items.forEach(item => {
                totalstored++;
                totalquantity += Number(item.quantity);
                total += Number(item.total);
            });
            IndexFuncs.showSummary(totalstored,totalquantity,items[items.length-1].date,"None",total);
        }else {IndexFuncs.showAlert("Your inventory is empty.");}     
    }
}