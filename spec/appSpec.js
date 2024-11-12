import { Main } from '../src/app.js'; 

describe('Berlin Clock - testing bottom minutes line (0 to 9)', function() {
    let main = new Main();

    it('Main should return 0000 for the bottom line when given XX:X0:XX', function() {
        const result = main.getBottomMinutes('XX:X0:XX');

        expect(result).toBe('0000');
    });    

    it('Main should return Y000 for the bottom line when given XX:X1:XX', function() {
        const result = main.getBottomMinutes('XX:X1:XX');

        expect(result).toBe('Y000');
    });

    it('Main should return YY00 for the bottom line when given XX:X2:XX', function() {
        const result = main.getBottomMinutes('XX:X2:XX');

        expect(result).toBe('YY00');
    });

    it('Main should return YYY0 for the bottom line when given XX:X3:XX', function() {
        const result = main.getBottomMinutes('XX:X3:XX');

        expect(result).toBe('YYY0');
    });

    it('Main should return YYYY for the bottom line when given XX:X4:XX', function() {
        const result = main.getBottomMinutes('XX:X4:XX');

        expect(result).toBe('YYYY');
    });

    it('Main should return 0000 for the bottom line when given XX:X5:XX', function() {
        const result = main.getBottomMinutes('XX:X5:XX');

        expect(result).toBe('0000');
    }); 

    it('Main should return Y000 for the bottom line when given XX:X6:XX', function() {
        const result = main.getBottomMinutes('XX:X6:XX');

        expect(result).toBe('Y000');
    });
});