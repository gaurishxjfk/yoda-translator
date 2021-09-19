var btnTranslate = document.querySelector("#btn-translate");
var btnClear = document.querySelector("#btn-clear");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

//
//https://api.funtranslations.com/translate/yoda.json?text=
function constructUrl(url){
    return "https://api.funtranslations.com/translate/yoda.json?text="+url;
}

function errorHandler(error){
    console.log('Error in getting request',error)
}

function doFetch(text){
    fetch(constructUrl(text))
    .then(response => response.json())
    .then(json => outputTranslate(json.contents.translated))
    .catch(errorHandler)
}
function outputTranslate(translated){
    txtOutput.value = translated;
}
btnTranslate.addEventListener('click', () => {
    
    doFetch(txtInput.value);
    
});

btnClear.addEventListener('click', () =>{
    txtInput.value = '';
    txtOutput.value = '';
} )