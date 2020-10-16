// function check(){

//     var n=document.getElementById("myInput").value;
    
//     if(n %2 == 0){

//         console.log("The Number Is Even:" +n);

//     }
//     else{
//         console.log("The NumBer Is odd:" +n)
//     }
// }

// function demo(){
//     //var date=new Date();
//     var today=new Date();
//     var day=today.getDay();
//     var dayList=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"]
//     document.getElementById("result").innerHTML="Today Is:"+dayList[day];
//     document.getElementById("result1").innerHTML= "Current Time Is:"+today.getMinutes() +":"+today.getSeconds();
// }

// function demo(){
//     document.getElementById("result").innerHTML=window.print();
// }

// function demo(){
//     var d=new Date();
//     var day=d.getDay();
//     var month=d.getMonth();
//     var year=d.getFullYear();
//     document.getElementById('result').innerHTML=month + "-" + day + "-" + year +"," + month + "/" + day +"/" + year ;
// }

// function demo(){
//     var area;
//     var side1=5;
//     var side2=6;
//     var side3=7;
//     var s=(side1 + side2 + side3)/2;
//     area=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
//     document.getElementById('result').innerHTML=area;
// }

// function multiply(){
//     var input1=parseInt(document.getElementById('myInput1').value);
//     var input2=parseInt(document.getElementById('myInput2').value);

//     var z=input1 * input2;

//     document.getElementById('result').innerHTML="The Input Is:" +"<br/>" + z;
// }

// function divide(){
//     var input1=parseInt(document.getElementById('myInput1').value);
//     var input2=parseInt(document.getElementById('myInput2').value);

//     var z=input1 / input2;

//     document.getElementById('result').innerHTML="The Input Is:" +"<br/>" + z;
// }

// function degree(){
//     var celcius=document.getElementById('myInput1').value;
//     var cTemp=celcius;
//     var cToFhr=cTemp * 9/5 + 32;
//     document.getElementById('result').innerHTML=cToFhr;
    
// }

// function fahrenite(){
//     var fahr=document.getElementById('myInput2').value;
//    var fTemp=fahr;
//     var fToCal=(fTemp-32) * 5/9;
//     document.getElementById('result1').innerHTML=fToCal;
// }

// function demo(){
//     alert("The URL of this page is:"+document.URL);
    
// }

// function demo(){
//     var var_name='admin';
//      var n=120;
//      var_name=n;
//     console.log(var_name);
// }

// function demo(){
//     var fileName='main,js';
//     console.log(fileName.split('.').pop());
//     var secondfile='index.html';
//     console.log(secondfile.split('.').pop());

// }

// function demo(n){
//     if(n<=13){
//         return(13 - n)
//     }
//     else{
//         return(n-13) *2;
//     }
// }
// console.log(demo(12));
// console.log(demo(55));

function demo(n1,n2){
    if(n1 == n2){
        return(n1 + n2) *3
    }
    else{
        return(n1 + n2) 
    }
}

console.log(demo(2,2));
console.log(demo(2,4))