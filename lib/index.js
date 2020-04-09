module.exports = {
    myFilter: require('./my_filter.js'),
    myMap: require('./my_map.js'),
    myReduce: require('./my_reduce.js'),
    mySome: require('./my_some.js'),
    myEvery: require('./my_every.js')
};

exports.printMsg = function() {
    console.log("Message from my package");
  }