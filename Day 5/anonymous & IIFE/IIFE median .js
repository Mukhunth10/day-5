-
const arr1 = [4,12,8,16];
const arr2 = [28,24,32,20];

arr1.sort(function(min,max){
    return min - max;
});

arr2.sort(function(min,max){
    return min - max;
});

const arr3 = arr1.concat(arr2);
arr3.sort(function(min,max){
    return min - max;
});
let find_median = function(){
    return (arr3[arr3.length/2] + arr3[arr3.length/2 - 1]) /(2);
}();
console.log(find_median);
