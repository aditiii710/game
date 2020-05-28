var data101 = null
function  getRandomQuote(){
    return fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then(response => response.json())
    .then(data =>
data.quote)
}
async function extract_data(){   
data101 = await getRandomQuote()     
document.getElementById("writtenText").innerHTML=data101;        
var abcd=document.getElementById("textarea").value   
var one=document.getElementById("submit") 
one.onclick=function(){
j=0;
for(i=0;i<data101.length;i++)      
{
    if(data101[i]!==abcd[i])          
    {
        j++;    
    }                           
}      
console.log(j);               
}     
}       
extract_data()  