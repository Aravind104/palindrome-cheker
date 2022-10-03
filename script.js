const inputField=document.querySelector("#inputText");
const btn=document.querySelector(".checkPalindrome");
const result=document.querySelector(".output");
btn.addEventListener("click",palindromeCheck);

function palindromeCheck(){
    let newStr="";
    let str=inputField.value;
    for(let i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
    if(newStr===str){
        result.innerHTML="you entered a palindrome";
    }
    else{
        result.innerHTML="Not a palindrome"
    }
    setTimeout(() => {
        result.innerHTML="";
        inputField.value="";
    },2000)
}