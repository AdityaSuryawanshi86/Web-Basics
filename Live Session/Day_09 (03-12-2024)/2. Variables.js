/*dynamically typed lang*/
var salary
salary=89000 // number
document.write((typeof salary) + "<br>") 

salary="eight nine thousand"// string
document.write((typeof salary) + "<br>") 

salary=true// boolean
document.write((typeof salary) + "<br>") 

var companyName="Neosoft"; var companyCode=456777;
var companyName="WebWerks"; // var type variable's redeclaration allowed
// var type variables: function scoped variables inside a function.
// let type variables: block scoped variables
let baseLocation="Dadar";
//let baseLocation="Rabale"; //Cannot redeclare block-scoped variable 'baseLocation'


function loop1(){
    for(var i=1;i<=5;i++){
        // var declared inside for loop
        document.write("<b>"+i+"</b> ")
        var message="hello"
    }// for ended
    document.write("<i>"+i+"</i>" + "<br>")
    document.write(message + "<br>");
}
loop1();

function loop2(){
    for(let i=1;i<=5;i++){
        // var declared inside for loop
        document.write("<b>"+i+"</b> ")
        let message="hello"
    }// for ended scope ended for let type variables 
//    document.write("<i>"+i+"</i>") //i is not defined - this is giving error
//     document.write(message); //message is not defined - this is giving error
}
loop2();

const pie=3.142;
// pie=3.14; //Assignment to constant variable. - this is giving error.