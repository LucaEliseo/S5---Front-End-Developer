// Script Animazione header

document.addEventListener('scroll', () => {
  const header = document.querySelector('header'); 
  const button = document.querySelector('button');

  if(document.documentElement.scrollTop > 400 ) {
    header.classList.add('scrolled');
    button.classList.add('scrolled');
    }else{
      header.classList.remove('scrolled');
      button.classList.remove('scrolled');
    }
})


//Script Animazione SVG

let path = document.getElementsByTagName("path");
let element = Array.from(path);

setInterval(function(){
  let lengthTime = element.length / 2;
  let num = Math.floor(Math.random() * lengthTime);
  element[num].style.opacity = "0";
  let showInterval = Math.floor(Math.random() * 1000);

  setTimeout(function(){
    let num2 = Math.floor(Math.random() * lengthTime);
    element[num2].style.opacity = "2";
  }, showInterval);
}, 40);