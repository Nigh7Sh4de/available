
var available = function() {
    this.time = [];
    this.cycles = 0;
}

available.prototype = {
    addTimeRange: function(start, end) {
        this.time.push(start);
        this.time.push(end - 1 /*ms*/);
    },
    
    checkTime: function(val) {
        for (var i = 0; i < this.time.length; i+=2) {
            var min = this.time[i];
            var max = this.time[i+1];
            if (min <= val && val <= max)
                return true;
            if (min > val)
                return false;
        }
        return false;
    },
    
    removeTimeRange: function(start, end) {
        for (var i=0; i < this.time.length; i+=2) {
            if (this.time[i+1] >= start) {
                if (this.time[i] > end)
                    return;
                else if (this.time[i] < start &&
                         this.time[i+1] > end) {
                    this.time.splice(i + 1, 0, start - 1/*ms*/, end);
                    return;
                }
                else if (this.time[i] >= start &&
                         this.time[i+1] < end) {
                    this.time.splice(i, 2);
                    i -= 2;
                }
                else if (this.time[i] < start &&
                         this.time[i+1] < end) {
                    this.time[i+1] = start - 1/*ms*/;
                }
                else if (this.time[i] >= start &&
                         this.time[i+1] > end) {
                    this.time[i] = end;
                }
            }
        }
    }
}

module.exports = available;