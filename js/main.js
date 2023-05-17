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



$('.slider').slick({
    dots: true,
    arrows: true,
    prevArrow: $('.prevBtn'),
    nextArrow: $('.nextBtn'),
    autoplay: true
})