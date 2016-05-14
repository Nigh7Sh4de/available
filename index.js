var check = function() {
    for(var i=1;i<=10;i++)
        console.log(i + ' ' + a.checkTime(i));
}

var Available = require('./available');
var a = new Available();

a._dec = function(n) {
    return n - 1;
} 

// a.addTimeRange(new Date('2016/01/01 2:00'), new Date('2016/01/01 5:00'));
// a.addTimeRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
// a.addTimeRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
// a.addTimeRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
// a.addTimeRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
// a.addTimeRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
// a.addTimeRange(new Date('2016/01/01 6:00'), new Date('2016/01/01 8:00'));
a.addTimeRange(2, 5);
a.addTimeRange(5, 6);
a.addTimeRange(5, 6);
a.addTimeRange(5, 6);
a.addTimeRange(5, 6);
a.addTimeRange(5, 6);
a.addTimeRange(9, 10);
a.addTimeRange(6, 8);


check();

a.removeTimeRange(4, 6);

check();

console.log('Done: ' + a.cycles);