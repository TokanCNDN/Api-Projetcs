const fromLang = document.querySelector("#from-lang");
const toLang = document.querySelector("#to-lang");
const fromTextArea = document.querySelector("#from-text");
const toTextArea = document.querySelector("#to-text");
const translateBtn = document.querySelector("#btnTranslate");
const exchange=document.querySelector('.exchange');
const icons=document.querySelectorAll(".icons");
//api="https://api.mymemory.translated.net/get?q={Text}!&langpair={From Language}|{To Language}"

for (const lang in languages) {
    // console.log(lang, languages[lang])
    let option = `<option value="${lang}">${languages[lang]}</option>`
    fromLang.insertAdjacentHTML("beforeend", option)
    toLang.insertAdjacentHTML("beforeend", option)

    fromLang.value="tr-TR"
    toLang.value="en-GB"
}
translateBtn.addEventListener('click', () => {
    let text = fromTextArea.value;
    let from = fromLang.value
    let to = toLang.value
    const url = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${from}|${to}`;

    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            toTextArea.value=data.responseData.translatedText
        })
});

exchange.addEventListener('click',()=>{
let text=fromTextArea.value;
fromTextArea.value=toTextArea.value
toTextArea.value=text;
let lang=fromLang.value;
fromLang.value=toLang.value;
toLang.value=lang
})
for (let icon of icons) {
    icon.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-copy")){
        if(e.target.id=="from"){
            navigator.clipboard.writeText(fromTextArea.value)
        }else{
            navigator.clipboard.writeText(toTextArea.value)
        }
    }else{
        let utterance;
        if(e.target.id=="from"){
            utterance =new SpeechSynthesisUtterance(fromTextArea.value)
            utterance.lang=fromLang.value;
        }else{
            utterance =new SpeechSynthesisUtterance(toTextArea.value)
            utterance.lang=toLang.value; 
        }
        speechSynthesis.speak(utterance);
    }
})
}