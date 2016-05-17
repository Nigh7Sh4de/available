
var ranger = function(arr) {
    this.ranges = arr || [];
}

var endBeforeStart = function(start, end) {
    if (start - end > 0)
        return true;
    return false;
}

ranger.prototype = {
    addRange: function(start, end) {
        if (endBeforeStart(start, end))
            return new Error('Start must be before end for range');
        var index = null,
            count = 0;
        for (var i=0; i < this.ranges.length; i+=2) {
            if (this.ranges[i] > end) {
                break;
            }
            else if (this.ranges[i+1] >= start) {
                if (this.ranges[i] <= start &&
                    this.ranges[i+1] >= end) {
                    return;
                }
                else if (this.ranges[i] >= start &&
                         this.ranges[i+1] < end) {
                    if (index === null) index = i;
                    count++;
                }
                else if (this.ranges[i] < start &&
                         this.ranges[i+1] <= end) {
                    if (index === null) index = i;
                    count++;
                    start = this.ranges[i];
                }
                else if (this.ranges[i] >= start &&
                         this.ranges[i+1] >= end) {
                    if (index === null) index = i;
                    count++;
                    end = this.ranges[i+1];
                    break;;
                }
            }
        }
        index = index === null ? this.ranges.length : index;
        this.ranges.splice(index, 2 * count, start, end);
    },
    
    check: function(val) {
        for (var i = 0; i < this.ranges.length; i+=2) {
            var min = this.ranges[i];
            var max = this.ranges[i+1];
            if (min <= val && val < max)
                return true;
            if (min > val)
                return false;
        }
        return false;
    },
    
    checkRange: function(start, end) {
        if (endBeforeStart(start, end))
            return new Error('Start must be before end for range');
        for (var i=0; i < this.ranges.length; i+=2) {
            if (this.ranges[i] <= start &&
                this.ranges[i+1] >= end)
                return true;
        }
        return false;
    },
    
    removeRange: function(start, end) {
        if (endBeforeStart(start, end))
            return new Error('Start must be before end for range');
        for (var i=0; i < this.ranges.length; i+=2) {
            if (this.ranges[i+1] >= start) {
                if (this.ranges[i] > end)
                    return;
                else if (this.ranges[i] < start &&
                         this.ranges[i+1] > end) {
                    this.ranges.splice(i + 1, 0, start, end);
                    return;
                }
                else if (this.ranges[i] >= start &&
                         this.ranges[i+1] < end) {
                    this.ranges.splice(i, 2);
                    i -= 2;
                }
                else if (this.ranges[i] < start &&
                         this.ranges[i+1] < end) {
                    this.ranges[i+1] = start;
                }
                else if (this.ranges[i] >= start &&
                         this.ranges[i+1] > end) {
                    this.ranges[i] = end;
                }
            }
        }
    }
}

module.exports = ranger;