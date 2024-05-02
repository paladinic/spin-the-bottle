document.getElementById('spinButton').addEventListener('click', function() {
    let bottle = document.getElementById('bottle');
    let randomSpin = Math.floor(Math.random() * 1440); // Random degree from 0 to 1440
    let currentRotation = parseInt(bottle.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
    let newRotation = currentRotation + randomSpin;

    bottle.style.transform = `rotate(${newRotation}deg)`;
});
