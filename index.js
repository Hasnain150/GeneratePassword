const pwd=document.querySelector("#generatePwd");
const searchBar=document.querySelector("#searchBar")
const copyButton=document.querySelector("#copyButton");
const okButton=document.querySelector("#first");
const lengthbar=document.querySelector("#inputBar");
const finalText=document.querySelector("#final");
const err=document.querySelector(".error");
const err2=document.querySelector(".error2");

lengthbar.addEventListener("input",()=>{
    lengthbar.style.background="#FAF0E6";
})

function copyTextToClipboard() {
    let x=searchBar.value;
    if(searchBar.value!=""){
        if(!navigator.clipboard){
            searchBar.select();
            document.execCommand("copy");
        }
        else{
            navigator.clipboard.writeText(x);
    
        }
        searchBar.value=""
        copyButton.disabled=true;
        finalText.style.display="inline-block";
        setTimeout(() => {
            finalText.style.display="none";
        }, 1000);
    
    
    }
 
   
}



okButton.addEventListener("click",()=>{
   let x=lengthbar.value;
   x=Number.parseInt(x);
   console.log(x);
   if(!x)
   {
    err2.style.display="inherit";
    err.style.display="none"
    pwd.disabled=true;


   } 
   else if(x>4){
    pwd.disabled=false;
    err2.style.display="none";
    err.style.display="none"
    okButton.disabled=true;
    pwd.style.display="block";
    pwd.addEventListener('click',()=>{
     const lowerCase="abcdefghijklmnopqrstuvwxyz"
       const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
       const symbol="!@#$%^&*()_+"
       const number="1234567890";
       value=x;
       const allChar=lowerCase+upperCase+symbol+number;
       let passwordG="";
       passwordG+=lowerCase.charAt(Math.floor(Math.random()*lowerCase.length))
       passwordG+=upperCase.charAt(Math.floor(Math.random()*upperCase.length))
       passwordG+=symbol.charAt(Math.floor(Math.random()*symbol.length))
       passwordG+=number.charAt(Math.floor(Math.random()*number.length))
       value-=4;
       for(let i=0;i<value;i++){
         passwordG+=allChar.charAt(Math.floor(Math.random()*allChar.length));
       }
     //   password is generated here
     searchBar.value=passwordG;
     copyButton.addEventListener("click",copyTextToClipboard);
    });
   }
   else{
    err.style.display="inherit"
    err2.style.display="none"
    pwd.disabled=true;

   }

})