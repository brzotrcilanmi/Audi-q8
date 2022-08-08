//Preloader
const preloader = document.querySelector('.pre-loader');
function hideLoader(){
    preloader.classList.add('hide');
}
window.addEventListener('load', hideLoader);


//Animated hamburger menu

const menu = document.getElementById('hamburger-menu');
const nav = document.getElementById('nav');
menu.onclick = () =>{
    menu.classList.toggle('change');

    if(nav.style.visibility === 'visible'){
        nav.style.visibility = 'hidden';
        let bars = document.querySelectorAll('.bar')
        bars.forEach(bar =>{
                bar.style.background = "white"
        })
    }else{
        nav.style.visibility = 'visible';
        let bars = document.querySelectorAll('.bar')
        bars.forEach(bar =>{
                bar.style.background ="#7c7c7e"
        })
    }
}
  




