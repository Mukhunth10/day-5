const a=["name","dob","address"];
let upper = [];
let b = (get)=>{
   for (i=0; i<get.length;i++){
   upper.push(get[i].toUpperCase());
   }
   console.log(upper)
}

b(a);