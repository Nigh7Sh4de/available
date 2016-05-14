var Available = require('./available');
var a = new Available();
a.addTimeRange(2, 4);

for(var i=1;i<6;i++)
    console.log(a.checkTime(i));
    
console.log(a.cycle);