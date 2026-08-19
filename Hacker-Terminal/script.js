const bootMessages = [
"Initializing G.A.S Kernel...",
"Loading Drivers...",
"Checking Memory...",
"Connecting to Secure Network...",
"Loading AI Modules...",
"Starting Terminal...",
"Access Granted ✔"
];

let i = 0;

function boot(){

    if(i < bootMessages.length){

        output.innerHTML += bootMessages[i] + "<br>";

        i++;

        setTimeout(boot,700);

    }

}

boot();const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&";
const chars = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];

for(let i=0;i<columns;i++){
    drops[i]=1;
}

function drawMatrix(){

    ctx.fillStyle="rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00ff00";
    ctx.font=fontSize+"px Consolas";

    for(let i=0;i<drops.length;i++){

        const text=chars[Math.floor(Math.random()*chars.length)];

        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
            drops[i]=0;

        drops[i]++;
    }

}

setInterval(drawMatrix,35);