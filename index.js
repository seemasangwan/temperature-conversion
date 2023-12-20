const stoi=(x)=>
{
    return parseInt(x);
}
const tofahrenheit=(x)=>
{
  return (x*9/5)+32;
}
const tocelsius=(x)=>
{
  return (x-32)*(5/9);
}
const submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>
{   e.preventDefault();
    // Here i use e ->event 
    // use preventDeafult() to stop refreshing the page;
    // when we use submit button in form it refresh the page when we click on it
    const temp=document.getElementById('temp').value;
    console.log(temp);
    let val=document.getElementById('number').value;
    val=stoi(val);
   
    console.log(val);
    let res;
    if(temp=="celsius")
    {
res=tofahrenheit(val);
const result= document.getElementsByClassName('res')[0];
if(isNaN(val)==true)
result.innerHTML='Please Enter Valid Number';
else
result.innerHTML=`= ${res} fahrenheit`;
    }
    if(temp=="Fahrenheit")
    {
res=tocelsius(val);
const result= document.getElementsByClassName('res')[0];
if(isNaN(val)==true)
result.innerHTML='Please Enter Valid Number';
else
result.innerHTML=`= ${res} celsius`;
    }
  

})
