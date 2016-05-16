var check = function() {
    for(var i=1;i<=10;i++)
        console.log(i + ' ' + a.checkTime(new Date('2016/01/01 ' + i + ':00')));
        // console.log(i + ' ' + a.checkTime(i));
}

var Available = require('./available');
var a = new Available();

a.addTimeRange(new Date('2016/01/01 2:00'), new Date('2016/01/01 5:00'));
a.addTimeRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addTimeRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addTimeRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addTimeRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addTimeRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addTimeRange(new Date('2016/01/01 9:00'), new Date('2016/01/01 10:00'));
a.addTimeRange(new Date('2016/01/01 6:00'), new Date('2016/01/01 8:00'));
// a.addTimeRange(2, 4);
// a.addTimeRange(5, 6);
// a.addTimeRange(5, 6);
// a.addTimeRange(5, 6);
// a.addTimeRange(5, 6);
// a.addTimeRange(5, 6);
// a.addTimeRange(9, 10);
// a.addTimeRange(6, 8);
// console.log(a.time);
// a.addTimeRange(2, 7);


check();

a.removeTimeRange(new Date('2016/01/01 4:00'), new Date('2016/01/01 6:00'));
// a.removeTimeRange(4, 6);

check();

console.log('Done.');
// console.log('Done: ' + a.cycles);
console.log(a.time);