export class Main {

    getBottomMinutes(time) {
        const parts = time.split(":");
        const minutes = parts[1];
        const lastDigit = minutes[minutes.length -1];
        const lampsOn = lastDigit % 5;

        return "Y".repeat(lampsOn) + "0".repeat(4 - lampsOn);;
    }

    getTopMinutes(time) {
        const parts = time.split(":");
        const minutes = parseInt(parts[1], 10);
        const lampsOn = Math.floor(minutes / 5);

        if(lampsOn === 1) return "Y0000000000";
        if(lampsOn === 2) return "YY000000000";
        if(lampsOn === 3) return "YYR00000000";
        if(lampsOn === 4) return "YYRY0000000";
        if(lampsOn === 5) return "YYRYY000000";
        if(lampsOn === 6) return "YYRYYR00000";
        
        return "00000000000";
    }
}