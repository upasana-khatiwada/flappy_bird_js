const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const bird = new Bird();

function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
}

animate()