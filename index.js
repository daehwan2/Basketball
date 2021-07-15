function mouseDown() {
    for (let i = 0; i < 5; i++) {
        if (event.target === Aplayer[i]) {
            click = true;
            originX = event.clientX;
            originY = event.clientY;
            originLeft = Aplayer[i].offsetLeft;
            originTop = Aplayer[i].offsetTop;
            break;
        }
        else if (event.target === Bplayer[i]) {
            click = true;
            originX = event.clientX;
            originY = event.clientY;
            originLeft = Bplayer[i].offsetLeft;
            originTop = Bplayer[i].offsetTop;
            break;
        }
    }
    if(event.target === ball){
        click = true;
        originX = event.clientX;
        originY = event.clientY;
        originLeft = ball.offsetLeft;
        originTop = ball.offsetTop;
            
    }
}
function mouseUp() {
    click = false;
}
function mouseMove() {
    if (click) {
        for (let i = 0; i < 5; i++) {
            if (event.target === Aplayer[i]) {

                const diffX = event.clientX - originX;
                const diffY = event.clientY - originY;
                const endOfXPoint = courtWidth - playerWidth;
                const endOfYPoint = courtHeight - playerHeight;
                Aplayer[i].style.left = `${Math.min(Math.max(0, originLeft + diffX), endOfXPoint)}px`;
                Aplayer[i].style.top = `${Math.min(Math.max(0, originTop + diffY), endOfYPoint)}px`;
                break;
            }
            else if (event.target === Bplayer[i]) {

                const diffX = event.clientX - originX;
                const diffY = event.clientY - originY;
                const endOfXPoint = courtWidth - playerWidth;
                const endOfYPoint = courtHeight - playerHeight;
                Bplayer[i].style.left = `${Math.min(Math.max(0, originLeft + diffX), endOfXPoint)}px`;
                Bplayer[i].style.top = `${Math.min(Math.max(0, originTop + diffY), endOfYPoint)}px`;
                break;
            }
        }
        if(event.target === ball){
            const diffX = event.clientX - originX;
            const diffY = event.clientY - originY;
            const endOfXPoint = courtWidth - ballWidth;
            const endOfYPoint = courtHeight - ballHeight;
            ball.style.left = `${Math.min(Math.max(0, originLeft + diffX), endOfXPoint)}px`;
            ball.style.top = `${Math.min(Math.max(0, originTop + diffY), endOfYPoint)}px`;
                
        }

    }
}
const court = document.querySelector('.court');
const ball = document.querySelector('.ball');
const Aplayer = document.querySelectorAll('.Aplayer');
const Bplayer = document.querySelectorAll('.Bplayer');
const { width: courtWidth, height: courtHeight } = court.getBoundingClientRect();
const { width: playerWidth, height: playerHeight } = Aplayer[0].getBoundingClientRect();
const {width:ballWidth, height:ballHeight} = ball.getBoundingClientRect();
let click = false;
let originX;
let originY;
let originLeft;
let originTop;

for (let i = 0; i < 5; i++) {
    Aplayer[i].addEventListener('mousedown', mouseDown);
    Aplayer[i].addEventListener('mouseup', mouseUp);
    Bplayer[i].addEventListener('mousedown', mouseDown);
    Bplayer[i].addEventListener('mouseup', mouseUp);

    // Aplayer[i].addEventListener('touchstart', mouseDown,false);
    // Aplayer[i].addEventListener('touchend', mouseUp,false);
    // Bplayer[i].addEventListener('touchstart', mouseDown,false);
    // Bplayer[i].addEventListener('touchend', mouseUp,false);
}
ball.addEventListener('mousedown',mouseDown);
ball.addEventListener('mouseup',mouseUp);
// ball.addEventListener('touchstart',()=>console.log('touchstart'),false);
// ball.addEventListener('touchend',()=>console.log('touchend'),false);

court.addEventListener('mousemove', mouseMove);

// court.addEventListener('touchmove', mouseMove,false);