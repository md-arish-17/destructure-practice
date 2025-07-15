const users = {
    fname:"arish",
    age:68
}

// let fname = users.fname
// let age = users.age
// console.log(fname,age)         ese ho jyega lekin yeh destructuring nhi h


let {fname,age} = users   //yeh h destructuring

console.log(fname,age)

const users1 = {
    fname1:"umar",
    age1:81,
    hobbie:"cricket",
    talent:"web development"
}

let {fname1,age1,...bachaHuaSaman} = users1
console.log(fname1,age1,bachaHuaSaman)

