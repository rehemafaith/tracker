function smt() {
var triangle1=document.getElementById("value1").value;
var triangle2=document.getElementById("value2").value;
var triangle3=document.getElementById("value3").value;

var val1 =parseInt(triangle1);
var val2 =parseInt(triangle2);
var val3 =parseInt(triangle3);

var add = (val1 + val2);
if (val1==val2==val3){
alert("Your triangle is an Equilateral Triangle")
}
else if( val1==val2 && val1!=val3 || val2==val3 && val2!=val1|| val1==val3 && val1!=val2 ) {
   alert("your triangle is an isosceles triangle")
 }else if( add <= val3){
 alert("That is not a triangle")
 } else{
  alert("Your triangle is a scalene triangle")
  }
}
