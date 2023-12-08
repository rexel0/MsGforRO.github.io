document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('holdButton');
    button.addEventListener('click', function () {
        changeBackgroundAndText();
    });
});

function changeBackgroundAndText() {
    const backgrounds = ['secondBackground.jpg', 'thirdBackground.jpg'];
    const texts = ['Your text here', 'Another text'];
    
    const randomIndex = Math.floor(Math.random() * backgrounds.length);

    const background = backgrounds[randomIndex];
    const text = texts[randomIndex];

    document.querySelector('.background').src = background;
    document.querySelector('h1').innerText = text;
}
