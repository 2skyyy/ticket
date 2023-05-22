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


//리뷰창 start
const inputText = document.querySelector('.inputText');
const plusBtn = document.querySelector('.plusBtn');
const listBoxUl = document.querySelector('.listBoxUl');
const reviewSelect = document.querySelector('#reviewSelect');

const newN = () => {
    const newLi = document.createElement('li');
    newLi.classList.add('newLi');

    const proflie = document.createElement('div');
    proflie.classList.add('proflie');
    const pro = document.createElement('a');
    pro.classList.add('pro');
    pro.textContent = "프"
    const nickName = document.createElement('span');
    nickName.classList.add('nickName');
    nickName.textContent = "js25"
    proflie.appendChild(pro);
    proflie.appendChild(nickName);

    const likeBtn = document.createElement('div');
    likeBtn.classList.add('likeBtn');
    const like = document.createElement('button');
    like.classList.add('like');
    like.textContent = "좋아요";
    const hate = document.createElement('button');
    hate.classList.add('hate');
    hate.textContent = "싫어요";
    likeBtn.appendChild(like);
    likeBtn.appendChild(hate);

    const revTxt = document.createElement('div');
    revTxt.classList.add('revTxt');

    const conName = document.createElement('div');
    conName.classList.add('conName');
    conName.textContent = "관람 공연: " + reviewSelect.options[reviewSelect.selectedIndex].text;
    const conrev = document.createElement('div');
    conrev.classList.add('conrev');
    conrev.textContent = inputText.value;
    inputText.value = "";
    revTxt.appendChild(conName);
    revTxt.appendChild(conrev);

    const etc = document.createElement('div');
    etc.classList.add('etc');
    const date = document.createElement('span');
    date.classList.add('date');
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let day = now.getDate();
    date.textContent = (year + "." + month + "." + day);
    const declaration = document.createElement('span');
    declaration.classList.add('declaration');
    declaration.textContent = "신고하기";
    etc.appendChild(date);
    etc.appendChild(declaration);

    newLi.appendChild(proflie);
    newLi.appendChild(likeBtn);
    newLi.appendChild(revTxt);
    newLi.appendChild(etc);
    listBoxUl.appendChild(newLi);
}

const newList = () => {
    if(reviewSelect.options[reviewSelect.selectedIndex].value === ""){
        alert("리뷰 남기실 공연을 선택해주세요")
    }
    if(inputText.value.trim() !== "" && reviewSelect.options[reviewSelect.selectedIndex].value != "") {
        newN();
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

declaration.addEventListener('click', ()=>{
    prompt("신고 사유를 적어주세요")
})
//리뷰창 end