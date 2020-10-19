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

// function demo(n1,n2){
//     if(n1 == n2){
//         return(n1 + n2) *3
//     }
//     else{
//         return(n1 + n2) 
//     }
// }

// console.log(demo(2,2));
// console.log(demo(2,4))

// function demo(n1,n2)
// {
//     if(n1 == 50 || n2 == 50){
//         return(true)
//     }

//     else
//     {
//         (n1 + n2 == 50)
//     return(true)

        
//     }
    
// }

// console.log(demo(2,3));

// function demo(n1,n2){
//     return( n1 == 50 || n2 == 50) ||(n1 + n2 == 50)
// }

// console.log(demo(2,3))
// console.log(demo(50,55))
// console.log(demo(20,30))

// function demo(n){
//     if(n<=19){
//         return(19 -n);
//     }
//     else{
//         return(n - 19) * 3;
//     }
// }

// console.log(demo(20));
// console.log(demo(9));

// function demo(x,y){
//     if((x<0 && y>0 || y<0 && x>0)){
        
//         return("Positive");
//     }
//     else{
//         return('Negative');
//     }


// }

// console.log(demo(15,34));
// console.log(demo(20,-45));

// function demo(n){
//     if(n == null || n == undefined || n.substring(0,2)=="Py"){
//         return n;
    
//         }

//         else{
//             return "py"+ n;
//         }
//     }
// console.log(demo("Python"));

// function demo(){
//     n="Scientise7";
//     str=n.substring(2);
//     console.log(str);
// }


// function demo(){
//     var str="scientise7";
//     first=str.charAt(0);
//     console.log(first);
//     console.log(first + str + first);
    
// }

// function demo(x){
//     if((x % 3 == 0) || (x % 7 == 0)){
//         return true;
//     }
//             else{
//                 return false;
//             }
// }

// console.log(demo(2));
// console.log(demo(15));
// console.log(demo(35))

// function demo(){
//     var str="scientise7";
//     str2=str.substr(-3);
//     console.log(str2 + str + str2);
// }

// function demo(n){
//     if(n.length>=3){
//         n_len=3;
//          str=n.substring(n.length-3);
//         return str + n + str;
//     }
//     else{
//         return false;
//     }
// }
// console.log(demo("aaa"));
// console.log(str);

// function demo(str){
//     if(str.lenght<4){
//         return false
//     }
//     start=str.substring(0,4)
//     if(start=="Java"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(demo("abcasdsf"));
// console.log(demo("Java"));

// let obj ={
//     name: "umar",
//     class: 10
// }
// console.log(obj);
// obj.name='fawad';
// console.log(obj)



let array=[
    {
        name: "umar",
        class: 10
    },
    {
        name: "fawad",
        class: 10
    },
    {
        name: "sameer",
        class: 10
    },
    {
        name: "khan",
        class: 10
    },
]

//console.log(array);
let namedArray=["umar", "sammer","hussam" , "ali"]
var i;
for(i=0;i<array.length;i++){
        array[i].name=namedArray[i];
    
     
}
console.log(array);
//console.log(array);
// array[2].name="Ali";
// console.log(array);