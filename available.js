
var available = function() {
    this.time = [];
}

available.prototype = {
    addTimeRange: function(start, end) {
        this.time.push(start);
        this.time.push(end - 1 /*ms*/);
    },
    
    checkTime: function(val) {
        for (var i = 0; i < this.time.length; i++) {
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
            if (this.time[i+1] > start) {
                if (this.time[i] > end)
                    return;
                if (this.time[i] < start &&
                    this.time[i+1] > end) {
                        this.time.insert(start - 1/*ms*/, i + 1);
                        this.time.insert(end, i + 2)
                    }
            }
        }
    }
}

module.exports = available;