/* PARTICLES */
const pBox=document.getElementById('particles');
for(let i=0;i<70;i++){
    let s=document.createElement('span');
    s.style.left=Math.random()*100+'%';
    s.style.top=Math.random()*100+'%';
    s.style.animationDuration=6+Math.random()*10+'s';
    s.style.opacity=Math.random();
    pBox.appendChild(s);
}

/* SOUND CONTROL */
let sound=true;
function toggleSound(){
    sound=!sound;
    document.querySelector('.sound-btn').innerText = sound?"SOUND ON":"SOUND OFF";
}

/* AI VOICE MOD */
function aiVoice(){
    if(!sound) return;
    const msg = new SpeechSynthesisUtterance(
        "Selamat datang di website Still Obby."
    );
    msg.lang="id-ID";
    msg.rate=0.9;
    msg.pitch=1.2;
    speechSynthesis.speak(msg);
}

/* GLITCH TITLE */
document.querySelector('h1').classList.add('glitch');

/* RADAR BLIPS */
const blipBox=document.getElementById('blips');

setInterval(()=>{
    if(blipBox.children.length>8) blipBox.innerHTML="";
    let b=document.createElement('span');
    b.style.left=Math.random()*95+'%';
    b.style.top=Math.random()*95+'%';
    blipBox.appendChild(b);
},600);

/* MATRIX RAIN CODE */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01アカサタナハマヤラワABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) drops[i] = 1;

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

/* TERMINAL LOG */
const terminalLines = [
    "Initializing cyberpunk system...",
    "Loading neural network modules...",
    "Accessing city surveillance grid...",
    "Decrypting secure protocols...",
    "Neural interface online...",
    "AI core fully operational...",
    "No threats detected.",
    "System running at 100% efficiency.",
    "Awaiting command..."
];

let tIndex = 0;
setInterval(() => {
    const term = document.getElementById("terminalLog");
    if (term.children.length > 7) term.removeChild(term.firstChild);
    const line = document.createElement("div");
    line.textContent = "> " + terminalLines[tIndex % terminalLines.length];
    term.appendChild(line);
    tIndex++;
}, 1200);

/* RESPONSIVE RESIZE */
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

/* CONTROL PANEL TOGGLES */

document.getElementById('matrixToggle').onchange=e=>{
    document.getElementById('matrix').style.display = e.target.checked?"block":"none";
}

document.getElementById('particleToggle').onchange=e=>{
    document.getElementById('particles').style.display = e.target.checked?"block":"none";
}
