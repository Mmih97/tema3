'use strict'
function myEvery(fn, myArr){
    
    if( typeof fn !== 'function' ){
        throw new TypeError('not a function');
    }else if(fn.length < 1 || fn.length > 3){
        throw new Error('invalid callback function');
    }

    if (!Array.isArray(myArr)) {
        throw new TypeError('not an Array');
    }else if(!myArr.length){
        return false;
    }

    const thisArr = myArr;


    for(let i = 0; i < thisArr.length; i++ ){
        if (!fn(thisArr[i], i, thisArr)){
            return false;
        }
    }

    return true;
};
module.exports = myEvery;