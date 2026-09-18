//your JS code here. If required.
let form = document.querySelector('form');
let submitButton = document.querySelector('#btn');
let fetchUserFontSize = document.querySelector('#fontsize');
let fetchUserFontColor = document.querySelector('#fontcolor');
function fetchCookieFromStorage(){
  if(!document.cookie) {
    console.log("Still this time, cookies are not stored") 
    return;
  }
  let cookies = document.cookie.split(';'),color, size;
  for(let cookie of cookies){
    const [key,value] = cookie.split("=");
    if(key.trim().toLowerCase()==='fontcolor'.toLowerCase()) color = value.trim();
    if(key.trim().toLowerCase()==='fontsize'.toLowerCase()) size = value.trim();
  }
  if(color) {
     fetchUserFontColor.value = color;
    document.documentElement.style.setProperty('--font-color',color);
  }
  if(size){
     fetchUserFontSize.value = size; 
     document.documentElement.style.setProperty('--font-size',`${size}px`);
  }
}

submitButton.addEventListener('click',(e)=>{
  e.preventDefault();
  const color = fetchUserFontColor.value;
  const size = fetchUserFontSize.value;
  document.cookie = `fontcolor=${color}; max-age=${60*60*24*30}; path=/`;
  document.cookie = `fontsize=${size}; max-age=${60*60*24*30}; path=/`;
  document.documentElement.style.setProperty('--font-color',color);
  document.documentElement.style.setProperty('--font-size',`${size}px`);
})

fetchCookieFromStorage();