let users = ["bharath","sai","teja"];
for(let i=0;i<users.length;i++)
{
    console.log(users[i]);
}
users.map((user,i)=>{
    console.log(user);
})

let x = users.forEach((user,i)=>{
    return user;
}
);
console.log(x);
