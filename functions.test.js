const {
    myFilter,
    myMap,
    myReduce,
    mySome,
    myEvery
} = require('./lib');

describe('myFilter()', () => {
    test('should return array', () => {
        expect(myFilter(val => val >= 3, [1, 2, 3, 4])).toEqual([3, 4]);//cazul in care exista valori cautate
        expect(myFilter(val => val >= 3, [0, 1, 0, 2])).toEqual([]);//cazul in care nu se gasesc valori cautate
        expect(myFilter(val => val >= 3, [])).toEqual([]);//cazul in care primeste empty array
    });
    test('should throw error', () => {
        expect(() => myFilter(false, [1, 2])).toThrowError('not a function');//nu primeste o functie
        expect(() => myFilter(false, false)).toThrowError('not a function');//nu primeste parametri corecti
        expect(() => myFilter(val => val >= 3, false)).toThrowError('not an Array');//nu primeste un array ca parametru
        expect(() => myFilter(() => val >= 3, [1, 2, 3, 4])).toThrowError('invalid callback function');//functia argument nu primeste argumete
    });
});

describe('myMap()', () => {
    test('should return array', () => {
        expect(myMap(val => val += 3, [1, 2])).toEqual([4, 5]);
        expect(myMap(val => val += 3, [1])).toEqual([4]);
        expect(myMap(val => val += 3, [])).toEqual([]);

    });
    test('should throw error', () => {
        expect(() => myMap(false, [1, 2])).toThrowError('not a function');
        expect(() => myMap(false, false)).toThrow('not a function');
        expect(() => myMap(val => val += 3, false)).toThrowError('not an Array');
        expect(() => myMap(() => val += 3, [1, 2])).toThrowError('invalid callback function');
    });
});

describe('myReduce()', () => {
    test('should return value', () => {
        expect(myReduce((val1, val2) => val1 + val2, [1, 2, 3, 4])).toEqual(10);
        expect(myReduce((val1, val2) => val1 + val2, [1, 2, 3, 4], 5)).toEqual(15);
        expect(myReduce((val1, val2) => val1 + val2, [], 1)).toEqual(1);//cazul de empty array, dar cu valoare initiala data
        expect(myReduce((val1, val2) => val1 + val2, [])).toEqual(undefined);//cazul de empty array, fara valoare initiala data
    });
    test('should throw error', () => {
        expect(() => myReduce(false, [1, 2])).toThrowError('not a function');
        expect(() => myReduce(false, false)).toThrowError('not a function');
        expect(() => myReduce((val1, val2) => val1 + val2, false)).toThrowError('not an Array');
        expect(() => myReduce(() => val1 + val2, [1, 2, 3, 4])).toThrowError('invalid callback function');
        expect(() => myReduce((val1) => val1 + val2, [1, 2, 3, 4])).toThrowError('invalid callback function');//functia argument nu primeste destule argumente
    });
});

describe('mySome()', () => {
    test('should return boolean', () => {
        expect(mySome(val => val > 1, [1, 2, 3, 4])).toEqual(true);
        expect(mySome(val => val > 1, [0, 0])).toEqual(false);
        expect(mySome(val => val > 1, [])).toEqual(false);//un empty array ar trebui sa returneze fals

    });
    test('should throw error', () => {
        expect(() => mySome(false, [1, 2])).toThrowError('not a function');
        expect(() => mySome(false, false)).toThrowError('not a function');
        expect(() => mySome(val => val > 1, false)).toThrowError('not an Array');
        expect(() => mySome(() => val1 > 1, [1, 2])).toThrowError('invalid callback function');
    });
});

describe('myEvery()', () => {
    test('should return boolean', () => {
        expect(myEvery(val => val > 1, [2, 3, 4])).toEqual(true);
        expect(myEvery(val => val > 1, [0, 1])).toEqual(false);
        expect(myEvery(val => val > 1, [0, 3])).toEqual(false);//cazul in care doar cateva valori trec testul
        expect(myEvery(val => val > 1, [])).toEqual(false);
    });
    test('should throw error', () => {
        expect(() => myEvery(false, [1, 2])).toThrowError('not a function');
        expect(() => myEvery(false, false)).toThrowError('not a function');
        expect(() => myEvery(val => val > 1, false)).toThrowError('not an Array');
        expect(() => mySome(() => val1 > 1, [1, 2])).toThrowError('invalid callback function');
    });
});