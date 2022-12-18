const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const avatar = document.querySelector('.avatar');
const medias = document.querySelector('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const btnLight = document.querySelector(".light");

btnLight.addEventListener('click', function() {

  document.body.classList.toggle("light-mode");
  document.btns.classList.toggle("light-mode-btn-first");
});

console.log(btns);