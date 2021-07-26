// UI
const body = document.body;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
// console.log(dot);
// console.log(slides);
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

let activeslide = 0;
let counter = 1;

function setbody(){
    // body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}
// setbody();
function currentSlide(n){
    counter = n;
    // dots.forEach((dot)=>dot.classList.remove('active'));
    // dots[activeslide].classList.add('active');
    console.log(counter);
}
currentSlide(counter);



function setactiveslide(){
    // slides.forEach((slide)=>{
    // console.log(slide);
    // 	slide.classList.remove('active');
    // 	// console.log(slide);
    // });

    slides.forEach((slide)=>slide.classList.remove('active'));

    slides[activeslide].classList.add('active');

}
// setactiveslide();

rightbtn.addEventListener('click',function(){
    // console.log('hay');
    activeslide++;
    // console.log(activeslide);
    if(activeslide > slides.length - 1){
        activeslide=0;
    }

    setbody();
    setactiveslide();


    // console.log(activeslide);
});

leftbtn.addEventListener('click',function(){
    activeslide--;
    // console.log(activeslide);

    if(activeslide < 0){
        activeslide = slides.length - 1;
    }

    setbody();
    setactiveslide();


    // console.log(activeslide);
});

