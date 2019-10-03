function binary(arr,val) {
    var start = 0;
    var end = arr.length;
    var middle = Math.floor((start + end)/2);

    while (arr[middle] != val) {
        if (arr[middle] < val) {
            start = middle +1;
            middle = Math.floor((start + end)/2);
        }
        else if (arr[middle] > val) {
            end = middle - 1;
            middle = Math.floor((start + end)/2);
        }
    }
    if (arr[middle] === val) { 
        console.log("found at " + middle);
    }
}
function twoSum(arr, val) {
    var repo = {};
    for (var x = 0; x < arr.length; x++) {
        if (repo[arr[x] >= 0]) {
            return [repo[arr[x],x]]
        }
        repo[val- arr[x]] = x;
    }
}
