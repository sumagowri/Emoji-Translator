'use strict';

const input = document.getElementById('input');
const btnTranslate = document.getElementById('btn-translate');
const output = document.getElementById('output');
const url = 'https://api.funtranslations.com/translate/emoji.json';
let userText;

//functions
const translatedUrl =function(text){
    return `${url}?text=${text}`;
}

const translate = async function(text){
    const data = await fetch(translatedUrl(text));
    const result = await data.json();
    output.innerHTML = result.contents.translated;
} 

btnTranslate.addEventListener('click',()=>{
    userText = input.value;

    translate(userText);
});


const toggler = document.querySelector('#togg');
toggler.addEventListener('click',(e)=>toggle(e));
function toggle(e){
    if(e.target.checked===true){
        document.querySelector('#theme').href = "./Styles/dark.css";
        
    }else{
        document.querySelector('#theme').href = "./Styles/light.css"
    }
}
