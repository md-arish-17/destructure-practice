let array = ["value1","value2"]

let [var1,var2] = array

console.log(var1,var2)

let array1 =  ["value1","value2","value3","value4"]

// let[variable1,variable2] = array1
// let newArray = array1.slice(2)   slice method se bhi kr skte h spread operator se bhi kr skte h

let[variable1,variable2,...newArray] = array1


console.log(variable1,variable2,newArray)