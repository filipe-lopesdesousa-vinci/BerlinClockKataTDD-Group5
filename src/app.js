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
        return "0000"; 
    }
}

