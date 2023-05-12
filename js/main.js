const image = document.querySelector('.image');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


for (let i = 1; i < 8; i++) {
    let photo = document.createElement('img');
    photo.src = `../img/${i}.jpg`;
    image.appendChild(photo)
    console.log(photo);
}
const phs = document.querySelectorAll('img');

let img = 1;

let time;


next.addEventListener('click', () => {
    img++;
    clearTimeout(time);
    change();
});
prev.addEventListener('click', () => {
    img--;
    clearTimeout(time);
    change();
});

change();

function change() {
    if (img > phs.length) {
        img = 1;
    } else if (img < 1) {
        img = phs.length;
    }
    image.style.transform = `translateX(-${(img - 1) * 1000}px)`;

    time = setTimeout(() => {
        img++;
        change();
    }, 4000)
}

