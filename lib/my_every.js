function myEvery(fn, myArr){
    
    if( typeof fn !== 'function' ){
        throw new TypeError('not a function');
    }

    if (!Array.isArray(myArr)) {
        throw new TypeError('not an Array');
    }

    let thisArr = myArr;

    for(let i = 0; i < thisArr.length; i++ ){
        if (! fn(thisArr[i], i, thisArr)){
            return false;
        }
    }

    return true;
};
module.exports = myEvery;