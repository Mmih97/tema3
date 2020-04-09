function mySome(fn, myArr){

    if( typeof fn !== 'function' ){
        throw new TypeError('not a function');
    }

    if (!Array.isArray(myArr)) {
        throw new TypeError('not an Array');
    }

    let thisArr = myArr;

    for(let i = 0; i < thisArr.length; i++ ){
        if ( fn(thisArr[i], i, thisArr) ){
            return true
        }
    }

    return false;
};

module.exports = mySome;