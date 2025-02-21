
let display = document.getElementById('display');
let timer = null;
let startTime = 0;
let elapsedTime = 0 ; 
let isRunning = false;

function start(){
    if(isRunning) return;

    startTime = Date.now() - elapsedTime;
    timer = setInterval(update,10)
    isRunning = true;
    
}

function Stop(){
    if(isRunning){
        clearInterval(timer)
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    } 

}

function reset(){
    clearInterval(timer)
    startTime = 0;
    elapsedTime = 0 ; 
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update(){
    const currentTIme = Date.now(); // Date.now() give current time in millisec
    elapsedTime = currentTIme - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let millisec = Math.floor(elapsedTime % 1000 / 10 );

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    millisec = String(millisec).padStart(2, 0);

    display.textContent  = `${hours},${minutes},${seconds},${millisec}`;
}