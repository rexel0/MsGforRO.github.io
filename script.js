let isButtonPressed = false;

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('holdButton');
    button.addEventListener('click', function () {
        isButtonPressed = !isButtonPressed;
        changeBackgroundAndText();
    });
});

function changeBackgroundAndText() {
    const backgrounds = ['waiting.jpg', 'secondBackground.jpg', 'thirdBackground.jpg'];
    const texts = ["I'm waiting for you", 'Your text here', 'Another text'];

    const randomIndex = isButtonPressed ? 0 : Math.floor(Math.random() * (backgrounds.length - 1)) + 1;

    const background = backgrounds[randomIndex];
    const text = texts[randomIndex];

    document.querySelector('.background').src = background;
    document.querySelector('h1').innerText = text;
}
