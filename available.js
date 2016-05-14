
var available = function() {
    this.time = [];
    this.cycles = 0;
}

// available.prototype.

available.prototype = {
    _dec: function(d) {
        return new Date(d.valueOf() - 1);
    },
    addTimeRange: function(start, end) {
        var _start = null;
        var count = 0;
        var found = false;
        for (var i=0; i < this.time.length; i+=2) {
            this.cycles++;
            if (this.time[i+1] >= this._dec(start)) {
                count ++;
                _start = i;
                start = this.time[i];
            }
        }
        _start = _start != null ? _start : this.time.length;
        this.time.splice(_start, 2 * count, start, this._dec(end));
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
                    this.time.splice(i + 1, 0, this._dec(start), end);
                    return;
                }
                else if (this.time[i] >= start &&
                         this.time[i+1] < end) {
                    this.time.splice(i, 2);
                    i -= 2;
                }
                else if (this.time[i] < start &&
                         this.time[i+1] < end) {
                    this.time[i+1] = this._dec(start);
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