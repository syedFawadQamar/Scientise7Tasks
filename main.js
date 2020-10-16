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

function demo(){
    var d=new Date();
    var day=d.getDay();
    var month=d.getMonth();
    var year=d.getFullYear();
    document.getElementById('result').innerHTML=month + "-" + day + "-" + year +"," + month + "/" + day +"/" + year ;
}
