b=""
function display(a){
    b += a
    document.getElementById("previous").innerHTML=b

}
function calculation(){
  var  c=eval(b)
    document.getElementById("result").innerHTML=c
}

function clear1()
{
    b=" "
    document.getElementById("previous").innerHTML=0
    document.getElementById("result").innerHTML=0
   
}
 function back()
 {

var l=b.length
b=b.substring(0,l-1)
document.getElementById("previous").innerHTML=b



 }

