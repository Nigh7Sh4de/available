var check = function(number, r) {
    for(var i=0;i<=10;i++)
        if (!number)
            console.log(i + ' ' + (r || a).check(new Date('2016/01/01 ' + i + ':00')));
        else
            console.log(i + ' ' + (r || a).check(i));
}

var Derp = require('./derp');
var Nerp = require('./nerp');
var Ranger = require('./ranger');
var a = new Ranger();

a.addRange(new Date('2016/01/01 2:00'), new Date('2016/01/01 5:00'));
a.addRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));



a.addRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addRange(new Date('2016/01/01 5:00'), new Date('2016/01/01 6:00'));
a.addRange(new Date('2016/01/01 9:00'), new Date('2016/01/01 10:00'));
a.addRange(new Date('2016/01/01 6:00'), new Date('2016/01/01 8:00'));
// a.addRange(2, 5);
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

a.addRange(new Date('2016/01/01 9:00'), new Date('2016/01/01 9:30'));

console.log('a) 9-12: ' + a.checkRange(new Date('2016/01/01 9:00'), new Date('2016/01/01 12:00')));

a.addRange(new Date('2016/01/01 9:30'), new Date('2016/01/01 12:00'));

console.log('b) 9-12: ' + a.checkRange(new Date('2016/01/01 9:00'), new Date('2016/01/01 12:00')));

console.log('Done basic testing.');

a = new Ranger();
a.addRecuringRange(0, 1, 2, -1, 10);
check(true);

a = new Ranger();
a.addRecuringRange(2, 3, 2, -1, 10);
check(true);

a = new Ranger();
var onehour = 1000*60*60;
a.addRecuringRange(new Date('2016/01/01 00:00'), new Date('2016/01/01 01:00'), onehour*2, null, new Date('2016/01/01 10:00'))
check();

var derp = new Derp();
derp.thing.addRecuringRange(new Date('2016/01/01 00:00'), new Date('2016/01/01 01:00'), onehour*2, null, new Date('2016/01/01 10:00'))
check(false, derp.thing);

var nerp = new Nerp();
nerp.thing.addRecuringRange(2, 3, 2, -1, 10);
check(true, nerp.thing);
nerp.thing.removeRecuringRange(2, 3, 2, 2);
check(true, nerp.thing);


console.log('Done recuring testing.');


// console.log('Done: ' + a.cycles);
console.log(a.ranges);

console.log("Next after 3:00: ");
console.log(a.nextRange(new Date('2016/01/01 3:00')));