let nav = document.getElementById('nav');
let header = document.getElementsByTagName('header')[0];

window.onload =()=> {
    document.getElementById('preloading').remove();
    popup();
};

setInterval(hideNav, 200);

insertNav();

nav.addEventListener('click', scrollSection);

function insertNav(){
    const fragment = document.createDocumentFragment();

    for ( let sec of Array.from(document.getElementsByTagName('section')) ) {
        if (sec.id.includes('vid')) continue;
        const li = document.createElement('li');
        li.textContent = `the ${sec.id}`;
        fragment.append(li);
    }
        nav.append(fragment);
}

function hideNav() {
    let hovered = document.querySelector('#nav:hover');
    if ( hovered || window.pageYOffset - (header.offsetHeight + nav.offsetHeight) < 0) {
            nav.classList.remove('unhovered');
    } else {
        nav.classList.add('unhovered');
    }
}

function scrollSection (event) {
    if (event.target.nodeName !== "LI") return;

    event.target.onmousedown =()=> false;

    let txt = event.target.textContent;
    let sections = document.getElementsByTagName('section');
    let targetSec = Array.from(sections).find( sec=> txt.includes(sec.id));
    
    window.scrollTo(0, targetSec.offsetTop - nav.offsetHeight/2);
}

function popup() {
    const toTopButton = document.querySelector('.toTop');
    const vid = document.getElementsByClassName('vid')[0];
    toTopButton.onclick =()=> scrollTo(0,0);
    
    if ( window.pageYOffset - header.offsetHeight/2 > 0 ){
        toTopButton.style.display = 'block';
        vid.play();
        vid.onended =()=> {
            vid.muted = true;
            vid.loop = true;
        }
    } else {
        toTopButton.style.display = 'none';
    }

    mark();
    window.addEventListener('scroll', popup);
    
}

function mark () {
    const sections = document.getElementsByTagName('section');
    let avrgHeights = Array.from(sections).reduce((av, el)=> av + el.offsetHeight, 0) / sections.length;
    console.log(avrgHeights);
    let active = Array.from(sections).find(el=> {
        return el.getBoundingClientRect().top > 0 && window.pageYOffset - (el.offsetTop - avrgHeights * 1.40) > 0;
    })
    const prev = document.getElementsByClassName('activeSection');
    if (active) {
        if (active === prev[0]) return;
        while (prev.length) prev[0].classList.remove('activeSection');
        active.classList.add('activeSection');
    } else {
        while (prev.length) prev[0].classList.remove('activeSection');
    }
}
