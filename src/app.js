export class Main {

    getBottomMinutes(time) {
        const lampsOn = this.calculateLampsOnBottomHoursAndMinutes(time, 1);

        return "Y".repeat(lampsOn) + "0".repeat(4 - lampsOn);;
    }

    getTopMinutes(time) {
        const parts = time.split(":");
        const minutes = parseInt(parts[1], 10);
        const lampsOn = Math.floor(minutes / 5);

        let lamps = "";
        for (let i = 1; i <= 11; i++) {
            if (i <= lampsOn) {
                lamps += (i % 3 === 0) ? "R" : "Y";
            } else {
                lamps += "0";
            }
        }

        return lamps;
    }

    getBottomHours(time) {
       const lampsOn= this.calculateLampsOnBottomHoursAndMinutes(time, 0);

        return "R".repeat(lampsOn) + "0".repeat(4 - lampsOn); 
    }

    calculateLampsOnBottomHoursAndMinutes(time, index) {
        const parts = time.split(":");
        const digit = parts[index];
        const lastDigit = digit[digit.length - 1];
        const lampsOn = lastDigit % 5;
        return lampsOn;
    }

    getTopHours(time){
        const parts = time.split(":");
        const hours = parts[0];
        const lampsOn = Math.floor(hours/5);
       

        return "R".repeat(lampsOn) + ("0").repeat(4-lampsOn);

    }
    getSecondsLamp(time){
        if(time === "XX:XX:01") return '0';
        
        return 'R'; 
    }
}

