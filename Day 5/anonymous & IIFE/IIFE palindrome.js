const arr =["nun","rotator","eye","mukhunth","venkat"];
let palindrome = [];
let a = function(ar){
    for (let i = 0; i<ar.length; i++){
        let b = ar[i].split("");
        let c = b.reverse().join("");
        if(ar[i] === c){
            palindrome.push(c);
        }
    }
    console.log(palindrome);
}(arr)
