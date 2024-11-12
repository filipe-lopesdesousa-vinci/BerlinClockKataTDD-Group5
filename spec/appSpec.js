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
});