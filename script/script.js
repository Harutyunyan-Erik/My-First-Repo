import { text, defaultLanguage, getNameElement } from "./constants.js";

const name = getNameElement();

function languageSelector(){
    const mainName = text[defaultLanguage].mainName;

    if(defaultLanguage === "hy"){
        name.innerHTML = mainName;
        document.body.appendChild(name);
    }
}

languageSelector();