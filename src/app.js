export class Main {

    getBottomMinutes(time) {
        const parts = time.split(":");
        const minutes = parts[1];
        const lastDigit = minutes[minutes.length -1];
        const lampsOn = lastDigit % 5;

        if(lampsOn === 1 ) return "Y000";
        if(lampsOn === 2 ) return "YY00";
        if(lampsOn === 3 ) return "YYY0";
        if(lampsOn === 4 ) return "YYYY";

        
        return '0000';
    }
}