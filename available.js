
var available = function(arr, type) {
    this.time = arr || [];
}

available.prototype = {
    addTimeRange: function(start, end) {
        var index = null,
            count = 0;
        for (var i=0; i < this.time.length; i+=2) {
            if (this.time[i] > end) {
                break;
            }
            else if (this.time[i+1] >= start) {
                if (this.time[i] <= start &&
                    this.time[i+1] >= end) {
                    return;
                }
                else if (this.time[i] >= start &&
                         this.time[i+1] < end) {
                    if (index === null) index = i;
                    count++;
                }
                else if (this.time[i] < start &&
                         this.time[i+1] <= end) {
                    if (index === null) index = i;
                    count++;
                    start = this.time[i];
                }
                else if (this.time[i] >= start &&
                         this.time[i+1] >= end) {
                    if (index === null) index = i;
                    count++;
                    end = this.time[i+1];
                    break;;
                }
            }
        }
        index = index === null ? this.time.length : index;
        this.time.splice(index, 2 * count, start, end);
    },
    
    checkTime: function(val) {
        for (var i = 0; i < this.time.length; i+=2) {
            var min = this.time[i];
            var max = this.time[i+1];
            if (min <= val && val < max)
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
                    this.time.splice(i + 1, 0, start, end);
                    return;
                }
                else if (this.time[i] >= start &&
                         this.time[i+1] < end) {
                    this.time.splice(i, 2);
                    i -= 2;
                }
                else if (this.time[i] < start &&
                         this.time[i+1] < end) {
                    this.time[i+1] = start;
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