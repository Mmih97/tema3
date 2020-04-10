'use strict'
function myFilter(fn, myArr){
    
    if( typeof fn !== 'function' ){
        throw new TypeError('not a function');
    }else if(fn.length < 1 || fn.length > 3){
        throw new Error('invalid callback function')
    }

    if (!Array.isArray(myArr)) {
        throw new TypeError('not an Array');
    }

    let arr = [],
        thisArr = myArr;

    for( let i = 0; i < thisArr.length; i++ ){
        if ( fn(thisArr[i], i, thisArr) ){
            arr.push(thisArr[i]); 
        }
    }
    return arr;
};

module.exports = myFilter;