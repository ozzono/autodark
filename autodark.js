var body=document.querySelectorAll("web");
while(!body){
    setTimeout(()=>{
        body=document.querySelectorAll("web");
    }, 1000);
}
document.querySelectorAll('body')[0].className += ' dark';