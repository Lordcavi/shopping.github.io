// SPINNING LOGO
document.addEventListener("DOMContentLoaded", function() {
  const text = "FURNITURE**STORE**";
  const textContainer = document.querySelector('.text');
  const radius = 45; // Adjust the radius as necessary
  const angleIncrement = 360 / text.length;

  text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      const angle = angleIncrement * index;
      span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${260}deg)`;
      textContainer.appendChild(span);
  });
});


const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

// turning small images to big images when clicked
var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function() {
  MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
  MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
  MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
  MainImg.src = smallImg[3].src;
}

// SHOP PAGE SLIDING IMAGE



