export class Main {

    getBottomMinutes(time) {
        if(time === 'XX:X1:XX' || time === 'XX:X6:XX') return 'Y000';
        if(time === 'XX:X2:XX') return 'YY00';
        if(time === 'XX:X3:XX') return 'YYY0';
        if(time === 'XX:X4:XX') return 'YYYY';

        return '0000';
    }
}