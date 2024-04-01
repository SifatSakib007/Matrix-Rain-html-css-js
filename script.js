const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const text = "1234567890!@#$%^&*()_+}{|:<>?~ろぬふあうえおやゆよわほへたていすかんなせせりのまくきはしとちもひみこひこさそひそつムロペ゛ケレメモハンイソミらいおよ";

const fontsize = 20;

const column = canvas.width/fontsize;

const f = [];

for(let x=0; x<column; x++){
    f[x] = 1;
}

const draw =() => {
    context.fillStyle = 'rgba(0,0,0.05)';
    context.fillRect(0,0,canvas.width, canvas.height);


    context.fillStyle = "#0f0";
    context.font = fontsize + "px monospace";


for(let x = 0; x<f.length; x++){
    const randomText = text.charAt(Math.floor(Math.random()*text.length));
    context.fillText(randomText, x * fontsize, f[x]*fontsize);

    if(f[x]*fontsize > canvas.height && Math.random() > 0.975){
        f[x] = 0;
    } 
    f[x]++;
}
};
setInterval(draw, 35);