ranger.js
========

A lightweight JS library for defining an array of ranges.

*note: upper limit is always non-inclusive*

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

####newRanger.addRecuringRange(from, to, interval, count, finish);
*Either `count` (of reptitions) or `finish` (final upper limit) must be set.*
*If using `finish`, set `count` to `null` or `< 1`.*

    //These will create the same ranges:
    newRanger.addRecuringRange(1, 2, 2, 3);
    newRanger.addRecuringRange(1, 2, 2, 0, 7);
    //Result:
    newRanger.check(1); //true
    newRanger.check(2); //false
    newRanger.check(3); //true
    newRanger.check(4); //false
    newRanger.check(5); //true
    newRanger.check(6); //false
    newRanger.check(7); //false
    
####newRanger.removeRecuringRange(from, to, interval, count, finish);
*Either `count` (of reptitions) or `finish` (final upper limit) must be set.*
*If using `finish`, set `count` to `null` or `< 1`.*

    newRanger.addRange(1, 8);
    //These will remove the same ranges:
    newRanger.removeRecuringRange(1, 2, 2, 3);
    newRanger.removeRecuringRange(1, 2, 2, 0, 7);
    //Result:
    newRanger.check(1); //false
    newRanger.check(2); //true
    newRanger.check(3); //false
    newRanger.check(4); //true
    newRanger.check(5); //false
    newRanger.check(6); //true
    newRanger.check(7); //true