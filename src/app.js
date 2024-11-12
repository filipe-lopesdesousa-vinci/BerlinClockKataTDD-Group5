export class Main {

    getBottomMinutes(time) {
        const parts = time.split(":");
        const minutes = parts[1];
        const lastDigit = minutes[minutes.length -1];
        const lampsOn = lastDigit % 5;

        return "Y".repeat(lampsOn) + "0".repeat(4 - lampsOn);;
    }

    getTopMinutes(time) {
        if(time === "XX:05:XX" || time === "XX:06:XX") return "Y0000000000";
        return "00000000000";
    }
}