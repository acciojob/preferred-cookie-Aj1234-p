//your JS code here. If required.
let form = document.querySelector('form');
let submitButton = document.querySelector('#btn');
let fetchUserFontSize = document.querySelector('#fontsize');
let fetchUserFontColor = document.querySelector('#fontcolor');

function fetchCookieFromStorage(){
  if(!document.cookie) {
    console.log("Still this time, cookies are not stored")
    fetchUserFontSize.value = `${16}`;
    return;
  }
  let cookies = document.cookie.split(';'),color, size;
  for(let cookie of cookies){
    const [key,value] = cookie.split("=");
    if(key.trim().toLowerCase()==='Color'.toLowerCase()) color = value;
    if(key.trim().toLowerCase()==='Size'.toLowerCase()) size = value;
  }
  fetchUserFontColor.value = color;
  fetchUserFontSize.value = size;
}

submitButton.addEventListener('click',(e)=>{
  e.preventDefault();
  document.cookie = `Color=${fetchUserFontColor.value}`;
  document.cookie = `Size = ${fetchUserFontSize.value}`;
})

fetchCookieFromStorage();