export class Main {

    getBottomMinutes(time) {
        const lampsOn = this.calculateLampsOnBottomHoursAndMinutes(time, 1);

        return "Y".repeat(lampsOn) + "0".repeat(4 - lampsOn);;
    }

    getTopMinutes(time) {
        const lampsOn = this.calculateLampsOnTopHoursAndMinutes(time,1);

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
        const lampsOn = this.calculateLampsOnTopHoursAndMinutes(time, 0);
       
        return "R".repeat(lampsOn) + ("0").repeat(4-lampsOn);

    }

    calculateLampsOnTopHoursAndMinutes(time, index) {
        const parts = time.split(":");
        const digit = parseInt(parts[index], 10);
        const lampsOn = Math.floor(digit / 5);
        return lampsOn;
    }
}

