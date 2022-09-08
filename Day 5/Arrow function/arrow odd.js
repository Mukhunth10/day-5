let a =  [1,2,3,4]
let arrow = (num) => {
    for(let i=0 ;i<num.length;i++){
      if(num[i]%2 != 0){
        console.log(num[i])

      }
    }
}
arrow(a);