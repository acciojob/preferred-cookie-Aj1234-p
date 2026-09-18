//your JS code here. If required.
let form = document.querySelector('form');
let submitButton = document.querySelector('#btn');
let fetchUserFontSize = document.querySelector('#fontsize');
let fetchUserFontColor = document.querySelector('#fontcolor');

function fetchCookieFromStorage(){
  if(!document.cookie) {
    console.log("Still this time, cookies are not stored");
    return;
  }
  let cookies = document.cookie.split(';'),color, size;
  for(let cookie of cookies){
    const [key,value] = cookie.split("=");
    if(key.trim().toLowerCase()==='fontcolor'.toLowerCase()) color = value.trim();
    if(key.trim().toLowerCase()==='fontsize'.toLowerCase()) size = value.trim();
  }
 if(color) fetchUserFontColor.value = color;
  if(size) fetchUserFontSize.value = size;
}

submitButton.addEventListener('click',(e)=>{
  e.preventDefault();
  document.cookie = `fontcolor=${fetchUserFontColor.value}; max-age=${60*60*24*30}; path=/`;
  document.cookie = `fontsize=${fetchUserFontSize.value}; max-age=${60*60*24*30}; path=/`;
})

fetchCookieFromStorage();