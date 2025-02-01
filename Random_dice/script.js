
function roll(){

    const NosOfDice = document.getElementById("NosOfDice").value;
    const submit = document.getElementById('submit');
    const DiceResult = document.getElementById('DiceResult');
    const DiceImage = document.getElementById('DiceImage')
    
    const values = [];
    const image =[];
    
    for(i=0; i < NosOfDice ;i++){
        const value = Math.floor(Math.random() * 6 ) + 1;
        values.push(value);
        image.push(`<img src="./dice_img/${value}.png" alt="Dice ${value}">`);
    
    }
    
    DiceResult.textContent = `Dices:${values.join(', ')}`;
    DiceImage.innerHTML = image.join(' ');
    
    }