let p3= new Promise((resolve, reject)=>{
    reject("Failures");
});

p3
.then(res=>console.log(res))
.catch(err=>console.log(err))
.finally(()=>console.log('final'))
