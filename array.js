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

let usersData={
    name:"bharath",
    age:20,
    city:"khammam",
};
console.log(usersData.name, typeof(usersData));

let n = JSON.stringify(usersData);
console.log(x, typeof(x));

let y = JSON.parse(x);
console.log(y);
