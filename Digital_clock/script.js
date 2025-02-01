function updateClock(){

    const time = new Date();
    let hours = time.getHours();

    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);

    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);
    const Timestring = `${hours}:${minutes}:${seconds} ${meridian}`; 

    document.getElementById("clock").textContent = Timestring;
}

updateClock()

setInterval(updateClock,1000)