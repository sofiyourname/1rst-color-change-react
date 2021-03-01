const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('Click', function() {
        //get ramdom number between 0 and number 3 colors[3]
        const randomNumber = getRandomNumber;
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
        console.log(colors);
    });

    function getRandomNumber() {
        return Math.random();
    }