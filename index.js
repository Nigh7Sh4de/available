var check = function() {
    for(var i=1;i<=10;i++)
        console.log(i + ' ' + a.check(new Date('2016/01/01 ' + i + ':00')));
        // console.log(i + ' ' + a.check(i));
}

var Ranger = require('./ranger');
var a = new Ranger();

a.addRange(new Date('2016/01/01 2:00'), new Date('2016/01/01 5:00'));
a.addRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addRange(new Date('2016/01/01 9:00'), new Date('2016/01/01 10:00'));
a.addRange(new Date('2016/01/01 6:00'), new Date('2016/01/01 8:00'));
// a.addRange(2, 4);
// a.addRange(5, 6);
// a.addRange(5, 6);
// a.addRange(5, 6);
// a.addRange(5, 6);
// a.addRange(5, 6);
// a.addRange(9, 10);
// a.addRange(6, 8);
// console.log(a.ranges);
// a.addRange(2, 7);


check();

a.removeRange(new Date('2016/01/01 4:00'), new Date('2016/01/01 6:00'));
// a.removeRange(4, 6);

check();

console.log('Done.');
// console.log('Done: ' + a.cycles);
console.log(a.ranges);