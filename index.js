var check = function() {
    for(var i=1;i<=10;i++)
        console.log(i + ' ' + a.checkTime(i));
}

var Available = require('./available');
var a = new Available();
a.addTimeRange(2, 5);
a.addTimeRange(5, 6);
a.addTimeRange(5, 6);
a.addTimeRange(5, 6);
a.addTimeRange(5, 6);
a.addTimeRange(5, 6);
a.addTimeRange(5, 8);


// check();

a.removeTimeRange(4,6);

check();

console.log('Done: ' + a.cycles);