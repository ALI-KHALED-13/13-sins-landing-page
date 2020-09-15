let nav = document.getElementById('nav');
let header = document.getElementsByTagName('header')[0];

window.onload =()=> {
    document.getElementById('preloading').remove();
    const vid = document.getElementsByClassName('vid')[0];
    vid.muted = false;
    popup();
};

setInterval(hideNav, 200);

insertNav();
Array.from(nav.children).forEach(li=> li.onmousedown =()=> false);
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


    let txt = event.target.textContent;
    let sections = document.getElementsByTagName('section');
    let targetSec = Array.from(sections).find( sec=> txt.includes(sec.id));
    
    window.scrollTo(0, targetSec.offsetTop - nav.offsetHeight/2);
}

function popup() {
    const toTopButton = document.querySelector('.toTop');
    toTopButton.onclick =()=> scrollTo(0,0);
    
    if ( window.pageYOffset - header.offsetHeight/2 > 0 ){
        toTopButton.style.display = 'block';
    } else {
        toTopButton.style.display = 'none';
    }

    mark();
    window.addEventListener('scroll', popup);
    
}

function mark () {
    const sections = document.getElementsByTagName('section');
    let minHeight = Math.min(...Array.from(sections).map(el=> el.offsetHeight));

    let active = Array.from(sections).filter(el=> {
        const factor = (document.documentElement.offsetWidth < 600 ? 1.9 : 0.9);
        return el.getBoundingClientRect().top > -el.offsetHeight / 3 && window.pageYOffset- (el.offsetTop - minHeight  * factor ) > 0;
    });

    const prev = document.getElementsByClassName('activeSection');
    Const vid = document.getElementsByClassName('vid')[0];

    if (active.length) {
        if (active[active.length-1] === prev[0]) return;
        if (active[active.length-1].id == 'vidglance') {
            vid.play();
            vid.onended =()=> {
                vid.muted = true;
                vid.play();
                vid.loop = true;
        }
        }
        while (prev.length) {
            prev[0].classList.remove('activeSection');
        }
        active[active.length - 1].classList.add('activeSection');
    } else {
        while (prev.length) prev[0].classList.remove('activeSection');
    }
}
