var hammingDistance = function(x, y){
    var count = 0;
    var i=31;
    
    while(i >= 0){
        var andX = x&1;
        var andY = y&1;
        if( andX != andY )
            count++;
        
        x = x>>1;
        y = y>>1;
        i--;
    }
    return count;
}

var output = hammingDistance(1, 4);
console.log(output);