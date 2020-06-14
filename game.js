var data101 = null
function  getRandomQuote(){
    return fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then(response => response.json())
    .then(data =>
data.quote)
}
let startTime;
var time=document.getElementById("timer")
function startTimer(){   
    time.innerHTML=0;
    startTime = new Date()
    setInterval(() => {            
        time.innerHTML = getTimerTime()             
    },1000)
}
function getTimerTime(){
    return Math.floor((new Date() - startTime)/1000) ;   
}
startTimer();
async function extract_data(){   
data101 = await getRandomQuote()     
document.getElementById("writtenText").innerHTML=data101;          
var one=document.getElementById("submit") 
one.onclick=function(){
j=0; 
for(i=0;i<data101.length;i++)      
{
    var abcd=document.getElementById("textarea").value ;
    if(data101[i]!==abcd[i])          
    {
        j++;      
    }                           
}      
document.write("number of errors: " + j );               
document.write("accuracy: " + (data101.length-j)/data101.length*100 + "%");  
document.write("speed: " + parseInt(abcd.length)/parseInt(time.innerHTML) + " words per second");
}                     
}        
extract_data()   
var two=document.getElementById("retry")
two.onclick=function(){
    document.getElementById("textarea").value="";
} 
