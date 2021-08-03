import { makeArrayWithoutDuplicates, getArrayDifference } from '../index';
test('Should make array without duplicates', () => {
    const arrayWithDuplicates = ['hei', 'test', 'hei', 'en test til'];
    const expectedResult = ['hei', 'test', 'en test til'];
    const result = makeArrayWithoutDuplicates(arrayWithDuplicates);
    expect(result).toEqual(expectedResult);
});

test('Should return difference between arrays', () => {
    const arrayOne = ['en', 'to', 'tre', 'fire'];
    const arrayTwo = ['en', 'to', 'tre'];
    const resultOne = getArrayDifference(arrayOne, arrayTwo);
    const resultTwo = getArrayDifference(arrayTwo, arrayOne);

    expect(resultOne).toEqual(['fire']);
    expect(resultTwo).toEqual([]);
});
