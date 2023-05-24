const getName = localStorage.getItem('userName');
const myPageActive = document.querySelector('.myPageActive');
const header = document.querySelector('#header');
const popUp = document.querySelector('.popUp');
const popCheckBox = document.querySelector('#popCheckBox');
const closebtn = document.querySelector('.closebtn');

//==========popUp start==========
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
//==========popUp end==========

//==========hearder start==========

//스크롤 700px이상 내렸을 때 header 효과
window.addEventListener('scroll', function () {
    if (scrollY > 700) {
        header.style.background = "#fff";
        header.style.boxShadow ="0 0 1px 0"
    }else{
        header.style.background = "rgba(255, 255, 255, 0.2)";
        header.style.boxShadow ="none"
    }
})

//로그인 시 닉네임 노출
if(getName != null){
    myPageActive.textContent = getName+"님";
    myPageActive.addEventListener('click', (e) => {
        e.preventDefault();
    })
}else{
    myPageActive.textContent = "로그인";
}

//search시 구글 검색창으로 이동
const searchInput = document.querySelector('.searchInput');
const goSearch = document.querySelector('.goSearch');
const goGoogle = ()=>{
    if(searchInput.value.trim() != ""){
        const googlePage = `https://google.com/search?q=${searchInput.value}`;
        location.href = googlePage;
    }
}
const googleEnter = () => {
    if(event.keyCode == 13){
        goGoogle();
    }
}
goSearch.addEventListener('click',()=>{
    goGoogle();
})

//==========hearder end==========



//==========main start==========

//=====section mainSlider ..........

//=====section hot ..........

//=====section new start=====

setInterval(() =>{
    const ddays=[
        new Date("December 20, 2023, 14:00:00").getTime(),
        new Date("December 28, 2023, 18:00:00").getTime(),
        new Date("February 03, 2024, 14:00:00").getTime(),
        new Date("February 05, 2024, 15:00:00").getTime(),
        new Date("May 19, 2024, 14:00:00").getTime()
    ]
    const today = new Date().getTime();
    const gaps = [];
    const days = [];
    const hours = [];
    const mins = [];
    const secs = [];

    for(let j=0; j<ddays.length; j++){
        gaps.push(ddays[j] - today);
        days.push(Math.ceil(gaps[j] / (1000 * 60 * 60 * 24))-1);
        hours.push(Math.ceil((gaps[j] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))-1);
        mins.push(Math.ceil((gaps[j] % (1000 * 60 * 60)) / (1000 * 60))-1);
        secs.push(Math.ceil((gaps[j] % (1000 * 60)) / 1000)-1);
        document.querySelector(`.dDay${j+1}`).innerHTML = "<span>D-" + days[j] + "</span><span>" + hours[j] + " : " + mins[j] + ": " + secs[j] + "</span>";
    }
}, 1000);

//=====section new end=====

//=====section rank start=====

const rankNavItem = document.querySelectorAll('.rankNavItem');
const rankConUl = document.querySelectorAll('.rankConUl');
rankNavItem.forEach((item,value)=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault();
        for(let j=0; j<rankConUl.length; j++){
            rankConUl[j].style.display="none";
        }
        for(let j=0; j<rankConUl.length; j++){
            rankNavItem[j].classList.remove('clickNav');
        }
        rankConUl.forEach((i,v) =>{
            if(value===v){
                item.classList.add('clickNav');
                i.style.display ="flex"
            }
        })
    })
})

//=====section rank end=====

//=====section interview start=====

// const interviewSlider = document.querySelector('.interviewSlider');
// const interviewitem = document.querySelectorAll('.interviewitem');
// const interviewitem1 = document.querySelector('.interviewitem1');
// const interviewitem2 = document.querySelector('.interviewitem2');
// const interviewitem3 = document.querySelector('.interviewitem3');
// const interviewitemAry = interviewitem.forEach((v)=>{
//     setInterval(() => {
//         v.style.transform = "translate(-100%)"
//     }, 1000);
// });
// for(let i=0; i<interviewitemAry.length; i++){
//     console.log(interviewitemAry.value)
// }
// const transform = () => {
//     style.transform = "translate(-100%)";
// }
// interviewitem1.transform();
//interviewitem1.style.transform = "translate(-100%)";
//setInterval(transform,1000);

//=====section interview end=====


//=====section review start=====

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
    const proAry = ["👻", "🐥", "👾", "🦊"]
    pro.textContent = proAry[Math.floor(Math.random() * proAry.length)];

    const nickName = document.createElement('span');
    nickName.classList.add('nickName');
    nickName.textContent = getName;

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
    like.addEventListener('click', () => {
        like.classList.toggle('clickBtn');
        hate.classList.remove('clickBtn');
    })
    hate.addEventListener('click', () => {
        hate.classList.toggle('clickBtn');
        like.classList.remove('clickBtn');
    })
    likeBtn.appendChild(like);
    likeBtn.appendChild(hate);

    const revTxt = document.createElement('div');
    revTxt.classList.add('revTxt');

    const conName = document.createElement('div');
    conName.classList.add('conName');
    conName.textContent = "관람 공연 : " + reviewSelect.options[reviewSelect.selectedIndex].text;
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
    let hour = now.getHours();
    let min = now.getMinutes();
    date.textContent = (year + "." + month + "." + day + " " + hour + ":" + min);
    const declaration = document.createElement('span');
    declaration.classList.add('declaration');
    declaration.textContent = "신고하기";
    declaration.addEventListener('click', ()=>{
        prompt("신고 사유를 적어주세요")
    })
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
        alert("리뷰 남기실 공연을 선택해주세요.")
    }
    if(getName == null){
        alert("로그인 후 이용해주세요.")

    }
    if(inputText.value.trim() !== "" && reviewSelect.options[reviewSelect.selectedIndex].value != "" && getName != null) {
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

//=====section review end=====

//=====section lastSec ..........



//==========main end==========


