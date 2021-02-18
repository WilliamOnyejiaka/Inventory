
export class Helper {
    
    static firstCharToUpper(str) {
        let strAr = str.split("");
        strAr[0] = str.charAt(0).toUpperCase();
        return strAr.join("");
    }
    
    static  giveID() {
        let upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let lowerLetters = upperletters.toLowerCase();
        let numbers = "1234567890";
        let ar1 = upperletters.split("");
        let ar2 = lowerLetters.split("");
        let ar3 = numbers.split("");
        let ar = ar1.concat(ar2,ar3);
        let id = ""
        for(let i = 0;i <= 10;i++) {
            id += ar[Math.floor(Math.random() * 62)];
        }
        return id;
    }  
}
