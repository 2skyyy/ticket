const header = document.querySelector('#header');
const popUp = document.querySelector('.popUp');
const popCheckBox = document.querySelector('#popCheckBox');
const closebtn = document.querySelector('.closebtn');

const popUpDelete = function(){
    popUp.style.display = "none";
}

popCheckBox.addEventListener('click', ()=>{
    popUpDelete();
});

closebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    popUpDelete();
});



$('.s1Slider').slick({
    dots: true,
    arrows: true,
    prevArrow: $('.prevBtn'),
    nextArrow: $('.nextBtn'),
    autoplay: true
})

$('.adSlider').slick({
    dots: true,
    arrows: true,
    autoplay: true
})

window.addEventListener('scroll', function () {
    if (scrollY > 700) {
        header.style.background = "#fff";
        header.style.boxShadow ="0 0 1px 0"
    }else{
        header.style.background = "rgba(255, 255, 255, 0.2)";
        header.style.boxShadow ="none"
    }
})

const rankAll = document.querySelector('.rankAll');
const rankCon = document.querySelectorAll('.rankAll > ul');

const rankNavItem = document.querySelectorAll('.rankNavItem');
const rankMusical = document.querySelector('.rank_musical');
const rankConcert = document.querySelector('.rank_concert');
const rankTheater = document.querySelector('.rank_theater');
const rankClassic = document.querySelector('.rank_classic');
const rankEx = document.querySelector('.rank_ex');

const rankNavArr = rankNavItem.forEach((i,v) => {});

rankNavItem.addEventListener('click', (e) => {
    e.preventDefault();
    
})