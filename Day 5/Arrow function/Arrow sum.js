const  a=[1,2,3,4,5,6,7,8,9,10];
let total = 0;
let anonyms =(get)=>{
    
    // let total = get.reduce((x,y)=>{
    //     return x+y
    // })

    for(let i = 0; i<get.length; i++){
        total += get[i];
    }

    console.log(total);
}
anonyms(a);