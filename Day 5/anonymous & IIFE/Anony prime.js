const arr = [];
let count;
let anonym = function(a,b){

    for (let i = a; i<b; i++){
        count = 0;
        for(let j =2; j<i; j++){
            if (i % j === 0){
                count = 1;
                break;
            }
        }
        if(i > 1 && count === 0){
            arr.push(i);
        }
    }
console.log(arr);
}

anonym(0,10);
