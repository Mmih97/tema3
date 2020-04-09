function myMap(fn, myArr){

    if( typeof fn !== 'function' ){
        throw new TypeError('not a function');
    }

    if (!Array.isArray(myArr)) {
        throw new TypeError('not an Array');
    }

    let arr = []; 
        thisArr = myArr;

    for(let i = 0; i < thisArr.length; i++ ){
        arr.push(fn(thisArr[i], i, thisArr)); 
    }
    
    return arr;
};

module.exports = myMap;