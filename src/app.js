export class Main {

    getBottomMinutes(time) {
        if(time === 'XX:X1:XX') return 'Y000';
        if(time === 'XX:X2:XX') return 'YY00';
        if(time === 'XX:X3:XX') return 'YYY0';

        return '0000';
    }
}