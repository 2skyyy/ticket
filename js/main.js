const getName = localStorage.getItem('userName');
const myPageActive = document.querySelector('.myPageActive');
const header = document.querySelector('#header');
const popUp = document.querySelector('.popUp');
const popCheckBox = document.querySelector('#popCheckBox');
const closebtn = document.querySelector('.closebtn');

//=====공통 start=====


//=====공통 end=====

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
let itemHeight = document.querySelector('.mainSlider').offsetHeight;
const scEvent = function () {
    if (scrollY > itemHeight) {
        header.style.background = "#fff";
        header.style.boxShadow ="0 0 1px 0"
    }else{
        header.style.background = "rgba(255, 255, 255, 0.2)";
        header.style.boxShadow ="none"
    }
}
window.addEventListener('scroll', ()=>{
    scEvent();
})
//새로고침 했을 때도 적용되게
window.addEventListener('DOMContentLoaded', ()=>{
    scEvent();
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

//=====section hot start=====

const goTicketing = document.querySelectorAll('.goTicketing');

goTicketing.forEach(i =>{
    i.addEventListener('click', ()=>{
        if(getName != null){
            const goTicketingPage = 'ticketing.html';
            location.href = goTicketingPage;
        }else{
            if(alert('로그인 후 이용 가능합니다.')){
                const goLoginPage = 'login.html';
                location.href = goLoginPage;
            }
        }
    });
})
//=====section hot end=====


//=====section new start=====

setInterval(() =>{
    const ddays=[
        new Date("December 20, 2023, 10:00:00").getTime(),
        new Date("December 28, 2023, 14:00:00").getTime(),
        new Date("February 03, 2024, 17:00:00").getTime(),
        new Date("February 05, 2024, 19:00:00").getTime(),
        new Date("May 25, 2024, 20:00:00").getTime()
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
        hours.push(Math.ceil((gaps[j] % (1000 * 60 * 60 * 24)-2) / (1000 * 60 * 60))-1);
        mins.push(Math.ceil((gaps[j] % (1000 * 60 * 60)) / (1000 * 60))-1);
        secs.push(Math.ceil((gaps[j] % (1000 * 60)) / 1000)-1);

        if(hours[j] > 24){
            hours[j] = hours[j]-24;
            days[j] =days[j]+1;
        }
        if(hours[j] < 10){
            hours[j] = '0'+ hours[j]
        }
        if(mins[j] < 10){
            mins[j] = '0'+ mins[j]
        }
        if(secs[j] < 10){
            secs[j] = '0'+ secs[j]
        }
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

const prev = document.querySelector('.prev');
const next = document.querySelector('.next')
const interviewSlider = document.querySelector('.interviewSlider');
const interviewitem = document.querySelectorAll('.interviewitem');
const interviewitem1 = document.querySelector('.interviewitem1');
const interviewitem2 = document.querySelector('.interviewitem2');
const interviewitem3 = document.querySelector('.interviewitem3');

interviewSlider.style.width = `${interviewitem.length * 1200}px`;

let num=0;

const trPrev = () => {
    interviewitem.forEach((i)=>{
        if(num<0){
            num=interviewitem.length-1;
        }
        i.style.transform = `translate(${-1200*(num)}px)`;
    })
}

const trNext = () => {
    interviewitem.forEach((i)=>{
        if(num===interviewitem.length){
            num=0;
        }
        i.style.transform = `translate(-${1200*num}px)`;
    })
}

setInterval(()=>{
    trNext();
},1000)

prev.addEventListener('click',()=>{
    num--;
    trPrev();
})
next.addEventListener('click',()=>{
    num++;
    trNext();
})

//=====section interview end=====


















//=====section review start=====
const listBoxUl = document.querySelector('.listBoxUl');
const inputText = document.querySelector('.inputText');
const plusBtn = document.querySelector('.plusBtn');
const reviewSelect = document.querySelector('#reviewSelect');
const boxUlArr = [];

const getNewList = localStorage.getItem('ReviewList');
listBoxUl.innerHTML = getNewList;

const plz = (proemj, textContent) => {
    const newLi = document.createElement('li');
    
    newLi.innerHTML = `
    <div class="proflie">
        <a class="pro">${proRandom(proemj)}</a>
        <span class="nickName">${getName}</span>
    </div>
    <div class="likeBtn">
        <button class="like">좋아요</button>
        <button class="hate">싫어요</button>
    </div>
    <div class="revTxt">
        <div class="conName">관람 공연 : ${reviewSelect.options[reviewSelect.selectedIndex].text}</div>
        <div class="conrev">${inputText.value}</div>
    </div>
    <div class="etc">
        <span class="date">${date(textContent)}</span>
        <span class="declaration">신고하기</span>
    </div>`
    inputText.value="";
    newLi.classList.add('newLi');
    listBoxUl.appendChild(newLi);

    JSON.stringify(localStorage.setItem('ReviewList', listBoxUl.innerHTML));

    return (listBoxUl, newLi);
}

const proRandom = () => {
    const proAry = ["👻", "🐥", "👾", "🦊"];
    const proemj = proAry[Math.floor(Math.random() * proAry.length)];
    return proemj;
}

const date = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let day = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();
    textContent = (year + "." + month + "." + day + " " + hour + ":" + min);
    return textContent;
}

//--------------새로고침 안하면 안먹힘--------------
const declaration = document.querySelectorAll('.declaration');
declaration.forEach((i) => {
    i.addEventListener('click', () => {
        prompt('신고사유를 적어주세요')
    })
})

const like = document.querySelectorAll('.like');
const hate = document.querySelectorAll('.hate');

like.forEach((i,v) => {
    i.addEventListener('click', (e) => {
        e.preventDefault();
        hate[v].classList.remove('clickBtn');
        i.classList.toggle('clickBtn');
        JSON.stringify(localStorage.setItem('ReviewList', listBoxUl.innerHTML));
    })
})

hate.forEach((i,v) => {
    i.addEventListener('click', (e) => {
        e.preventDefault();
        like[v].classList.remove('clickBtn');
        i.classList.toggle('clickBtn');
        JSON.stringify(localStorage.setItem('ReviewList', listBoxUl.innerHTML));
    })
})

//--------------새로고침 안하면 안먹힘--------------

const newList = () => {
    if(reviewSelect.options[reviewSelect.selectedIndex].value === ""){
        alert("리뷰 남기실 공연을 선택해주세요.")
    }
    if(getName == null){
        alert("로그인 후 이용해주세요.")
    }
    if(inputText.value.trim() !== "" && reviewSelect.options[reviewSelect.selectedIndex].value != "" && getName != null) {
        plz();
    }
}

function onAdd(newLi){
    boxUlArr.push(newLi);
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

