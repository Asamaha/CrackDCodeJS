var hash = function {
  var storage = [];
  var result = {}
  var size = 0;
  var limit = 8;

  result.insert = function(k, v) {
    var index = getindex(key, limit)
    var bucket = storage[index] || [];
    var replace = false;
    for(var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if(tuple[0] === k) {
        tuple[1] = v;
        replace = true;
      }
    }
    if (!replace) {
      bucket.push([k, v]);
    }
    size++;
    var resize = storage.length * limit * 0.75
    if (size > resize) {
      limit *= 2;
    }
  }

  result.remove = function (key) {
    var index = getindex(key, limit);
    var bucket = storage[index] || []

    for(var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if(tuple[0] === key) {
        var value = tuple[1]
        delete bucket[i];
        size--;

        var resize = storage.length * limit * 0.25
        if( size < limit ) {
          limit /= 2;
        }

        return value;
      }
    }
  }

  result.retrieve = function (key) {
    var index = getindex(key, limit) 
    var bucket = storage[index] || []

    for(var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if(tuple[0] === key) {
        return tuple[1]
      }
    }
  }
}