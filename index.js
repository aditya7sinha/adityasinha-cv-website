const typedTextSpan= document.querySelector(".typed-text");
const textArray=["while(!(succeed=try());","while(aim<ambitions){ work(); aim++;}"];
const typingDelay=100;
const erasingDelay=100;
const newTextDelay=2000;
let textArrayIndex=0;
let charIndex=0;
function type(){
    if(charIndex<textArray[textArrayIndex].length){
        typedTextSpan.textContent +=textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
    }
    else{
        setTimeout(erase,newTextDelay);
    }
}
function erase(){
    if(charIndex>=0){
        typedTextSpan.textContent =textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    }
    else{
        textArrayIndex++;
        if(textArrayIndex>=textArrayIndex.length) textArrayIndex=0;
        setTimeout(type,typingDelay+100);
    }
}
document.addEventListener("DOMContentLoaded",function(){
    setTimeout(type,newTextDelay-500);
});