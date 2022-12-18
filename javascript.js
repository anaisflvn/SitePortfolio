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

window.addEventListener('load', () => {
  
  const TL = gsap.timeline({paused: true});
  
  TL
  .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
  .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
  .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, 0.3, '-=2');
  .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');
  
  
  Tl.play();
}) 
