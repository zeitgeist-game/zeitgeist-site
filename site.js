const button=document.getElementById('lang');
const items=[...document.querySelectorAll('[data-en]')];
for(const item of items)item.dataset.ru=item.textContent;
let lang='ru';try{lang=localStorage.getItem('zg-site-lang')==='en'?'en':'ru'}catch{}
function translate(){
 document.documentElement.lang=lang;
 for(const item of items)item.textContent=item.dataset[lang];
 button.textContent=lang==='ru'?'EN':'RU';
 button.setAttribute('aria-label',lang==='ru'?'Switch to English':'Переключить на русский');
 document.title=lang==='ru'?'Zeitgeist — мир, который помнит':'Zeitgeist — a world that remembers';
 try{localStorage.setItem('zg-site-lang',lang)}catch{}
}
button.addEventListener('click',()=>{lang=lang==='ru'?'en':'ru';translate()});translate();
