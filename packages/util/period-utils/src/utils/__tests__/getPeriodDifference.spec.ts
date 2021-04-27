import getPeriodDifference from '../getPeriodDifference';
import Period from '../../types/Period';

describe('getPeriodDifference', () => {
    it('should blabla', () => {
        const result = getPeriodDifference(
            [new Period('2024-01-01', '2024-01-05')],
            [new Period('2024-01-03', '2024-01-10')]
        );
    });
});
