const {
    myFilter,
    myMap,
    myReduce,
    mySome,
    myEvery
} = require('./lib');

describe('myFilter()', () => {
    test('should return array', () => {
        expect(myFilter(val => val >= 3, [1, 2, 3, 4])).toEqual([3, 4]);
        expect(myFilter(val => val >= 3, [0, 1, 0, 2])).toEqual([]);
    });
    test('should throw error', () => {
        //aici nu inteleg de ce nu trece testul
        expect(myFilter(false, [1, 2])).toThrowError('not a function');
        expect(myFilter(false, false)).toThrow();
        expect(myFilter(val => val >= 3, false)).toThrowError('not an Array');
    });
});

describe('myMap()', () => {
    test('should return array', () => {
        expect(myMap(val => val += 3, [1, 2])).toEqual([4, 5]);
        expect(myMap(val => val += 3, [1])).toEqual([4]);
    });
    test('should throw error', () => {
        //nici aici nu inteleg de ce nu trece testul
        expect(myMap(false, [1, 2])).toThrowError('not a function');
        expect(myMap(false, false)).toThrow();
        expect(myMap(val => val += 3, false)).toThrowError('not an Array');
    });
});

describe('myReduce()', () => {
    test('should return value', () => {
        expect(myReduce((val1, val2) => val1 + val2, [1, 2, 3, 4])).toEqual(10);
        expect(myReduce((val1, val2) => val1 + val2, [1, 2, 3, 4], 5)).toEqual(15);
    });
    test('should throw error', () => {
        //nici aici nu inteleg de ce nu trece testul
        expect(myReduce(false, [1, 2])).toThrowError('not a function');
        expect(myReduce(false, false)).toThrow();
        expect(myReduce((val1, val2) => val1 + val2, false)).toThrowError('not an Array');
    });
});

describe('mySome()', () => {
    test('should return boolean', () => {
        expect(mySome(val => val > 1, [1, 2, 3, 4])).toEqual(true);
        expect(mySome(val => val > 1, [0, 0])).toEqual(false);
    });
    test('should throw error', () => {
        //nici aici nu inteleg de ce nu trece testul
        expect(mySome(false, [1, 2])).toThrowError('not a function');
        expect(mySome(false, false)).toThrow();
        expect(mySome(val => val > 1, false)).toThrowError('not an Array');
    });
});

describe('myEvery()', () => {
    test('should return boolean', () => {
        expect(myEvery(val => val > 1, [2, 3, 4])).toEqual(true);
        expect(myEvery(val => val > 1, [0, 1])).toEqual(false);
        expect(myEvery(val => val > 1, [0, 3])).toEqual(false);

    });
    test('should throw error', () => {
        //nici aici nu inteleg de ce nu trece testul
        expect(myEvery(false, [1, 2])).toThrowError('not a function');
        expect(myEvery(false, false)).toThrow();
        expect(myEvery(val => val > 1, false)).toThrowError('not an Array');
    });
});