/* ========================= */
/* script.js */
/* ========================= */

/* CUSTOM CURSOR */

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove',e=>{

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

});

/* CURSOR HOVER */

const links = document.querySelectorAll('a, button');

links.forEach(link=>{

    link.addEventListener('mouseenter',()=>{

        cursor.style.width = '42px';
        cursor.style.height = '42px';

    });

    link.addEventListener('mouseleave',()=>{

        cursor.style.width = '20px';
        cursor.style.height = '20px';

    });

});

/* MUSIC BUTTON */

let active = false;

const musicBtn =
    document.getElementById('musicBtn');

musicBtn.addEventListener('click',()=>{

    active = !active;

    if(active){

        musicBtn.innerHTML = '♫ ambience on';

        musicBtn.style.background =
            'rgba(255,255,255,.18)';

    }else{

        musicBtn.innerHTML = '♫ ambience';

        musicBtn.style.background =
            'rgba(255,255,255,.08)';
    }

});

/* FLOATING CARD EFFECT */

const card = document.querySelector('.container');

document.addEventListener('mousemove',e=>{

    if(window.innerWidth < 768) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 35;

    const y =
        (window.innerHeight / 2 - e.clientY) / 35;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

});

/* RESET CARD */

document.addEventListener('mouseleave',()=>{

    card.style.transform =
        `rotateY(0deg) rotateX(0deg)`;

});

/* AUTO FADE TITLE */

const titles = [

    "Creator",
    "Gamer",
    "Music Enthusiast",
    "Developer",
    "Multiverse"

];

let index = 0;

setInterval(()=>{

    document.querySelector('.subtitle')
    .style.opacity = 0;

    setTimeout(()=>{

        document.querySelector('.subtitle')
        .innerText = titles[index % titles.length];

        document.querySelector('.subtitle')
        .style.opacity = .8;

        index++;

    },400);

},3000);
