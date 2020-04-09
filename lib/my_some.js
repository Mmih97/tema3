function mySome(fn, myArr){

    if( typeof fn !== 'function' ){
        throw new TypeError('not a function');
    }

    if (myArr == null) {
        throw new TypeError('null Array');
    }

    let thisArr = myArr;

    for(let i = 0; i < thisArr.length; i++ ){
        if ( fn(thisArr[i], i, thisArr) == true){
            return true
        }
    }

    return false;
};

module.exports.mySome = mySome;