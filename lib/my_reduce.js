function myReduce(fn, myArr, initVal){
    
    if( typeof fn !== 'function' ){
        throw new TypeError('not a function');
    }

    if(myArr === null){
        throw new TypeError('null Array');
    }

    let acc, i;

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

module.exports.myReduce = myReduce;