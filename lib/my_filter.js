function myFilter(fn, myArr){
    
    if( typeof fn !== 'function' ){
        throw new TypeError('not a function');
    }

    if (myArr == null) {
        throw new TypeError('null Array');
    }

    let arr = [],
        thisArr = myArr;

    for( let i = 0; i < thisArr.length; i++ ){
        if ( fn(thisArr[i], i, thisArr) == true ){
            arr.push(thisArr[i]); 
        }
    }
    return arr;
};

module.exports.myFilter = myFilter;