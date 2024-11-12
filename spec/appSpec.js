import { Main } from '../src/app.js'; 

describe('Berlin Clock - testing bottom minutes line (0 to 9)', function() {
    let main = new Main();

    it('Main should return 0000 for the bottom line when given XX:X0:XX', function() {
        const result = main.getBottomMinutes('XX:X0:XX');

        expect(result).toBe('0000');
    });    
});