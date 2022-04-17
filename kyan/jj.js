console.log("factorial functio")


function fa(a){
    let d = a*(a-1)
    return d*fa(a-1);
}

let a = 4 ;
fa(4);
console.log("the factorial pof 4 is " + fa(4));
alert( "hi");
let name = prompt("who are you", "tell here");
console.log(name);