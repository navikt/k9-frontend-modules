import Period from './../Period';

describe('Period tests', () => {
    it('blabla', () => {
        const period = new Period('2028-01-01', '2028-01-10');
        expect(period.fomIsBeforeOrSameAsTom()).toBe(true);
        expect(period.prettifyPeriod()).toBe('01.01.2028 - 10.01.2028');

        const overlappingPeriod = new Period('2028-01-07', '2028-01-12');
        expect(period.overlapsWithSomePeriodInList([overlappingPeriod])).toBe(true);
        expect(period.overlapsRight(overlappingPeriod)).toBe(false);
        expect(period.endsAfter(overlappingPeriod)).toBe(false);
    });
});
