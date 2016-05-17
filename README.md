ranger.js
========

A lightweight JS library for defining an array of ranges.

*note: upper limit is exclusive*

    var ranger = require('rangerjs');
    var newRanger = new ranger();
    var existingRanger = new ranger(array);
    
####newRanger.addRange(from, to);
    newRanger.addRange(1, 4);
    
####newRanger.removeRange(from, to);
    newRanger.removeRange(2, 3);
    
####newRanger.check(value);
    newRanger.check(1); //true
    newRanger.check(2); //false
    newRanger.check(3); //true
    newRanger.check(4); //false
    newRanger.check(5); //false
    
####newRanger.checkRange(from, to);
    newRanger.checkRange(1, 5); //false
    newRanger.checkRange(2, 4); //false
    newRanger.checkRange(2, 3); //true
    newRanger.checkRange(3, 4); //true