import Period from './../Period';

describe('Period tests', () => {
    it('blabla', () => {
        const period = new Period('2028-01-01', '2028-01-01');
        expect(period.prettifyPeriod()).toBe('01.01.2028 - 01.01.2028');
    });
});
