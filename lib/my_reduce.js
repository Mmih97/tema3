'use strict'
function myReduce(fn, myArr, initVal){
    
    if( typeof fn !== 'function' ){
        throw new TypeError('not a function');
    }else if(fn.length < 2 || fn.length > 4){
        throw new Error('invalid callback function')
    }

    if(!Array.isArray(myArr)){
        throw new TypeError('not an Array');
    }

    let acc, i = 0;

    if(!initVal){
        acc = myArr[0];
        i = 1;
    }
    else{
        acc = initVal;
    }

    let thisArr = myArr;
    
    for(; i < myArr.length; i++ ){
        acc = fn(acc, thisArr[i], i, thisArr);
    }

    return acc;
};

module.exports = myReduce;