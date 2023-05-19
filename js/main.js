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
    arrows: false,
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


const inputText = document.querySelector('.inputText');
const plusBtn = document.querySelector('.plusBtn');
const newLi = document.querySelector('.newLi');
const listBoxUl = document.querySelector('.listBoxUl');
const newLiEl = document.createElement('li');



const newList = () => {
    
    if(inputText.value.trim() != ""){
        listBoxUl.appendChild(newLiEl);
        newLiEl.classList.add('newLi');
        inputText.value = "";
    }
}

plusBtn.addEventListener('click', () => {
    newList();
})

const enter = () => {
    if(event.keyCode == 13){
        newList();
    }
}
