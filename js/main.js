const getName = localStorage.getItem('userName');
const myPageActive = document.querySelector('.myPageActive');
const header = document.querySelector('#header');
const popUp = document.querySelector('.popUp');
const popCheckBox = document.querySelector('#popCheckBox');
const closebtn = document.querySelector('.closebtn');

//로그인 시 닉네임 노출 start
if(getName != null){
    myPageActive.textContent = getName+"님";
    myPageActive.addEventListener('click', (e) => {
        e.preventDefault();
    })
}else{
    myPageActive.textContent = "로그인";
}
//로그인 시 닉네임 노출 end

//popUp start
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
//popUp end

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
//



window.addEventListener('scroll', function () {
    if (scrollY > 700) {
        header.style.background = "#fff";
        header.style.boxShadow ="0 0 1px 0"
    }else{
        header.style.background = "rgba(255, 255, 255, 0.2)";
        header.style.boxShadow ="none"
    }
})

//section new start
//d-day 구하기

// var dday = new Date("May 17, 2024, 14:00:00").getTime();

// setInterval(function () {
//     var today = new Date().getTime();
//     var gap = dday - today;
//     var day = Math.ceil(gap / (1000 * 60 * 60 * 24))-1;
//     var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))-1;
//     var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
//     var sec = Math.ceil((gap % (1000 * 60)) / 1000);

//     document.querySelector('.dDay').innerHTML = "<span>D-" + day  + "</span><span>" + hour + " : " + min + ": " + sec + "</span>";
// }, 1000);

    
setInterval(() =>{
    const dday1 = new Date("December 20, 2023, 14:00:00").getTime();
    const dday2 = new Date("December 28, 2023, 18:00:00").getTime();
    const dday3 = new Date("February 03, 2024, 14:00:00").getTime();
    const dday4 = new Date("February 05, 2024, 15:00:00").getTime();
    const dday5 = new Date("May 19, 2024, 14:00:00").getTime();

    const today = new Date().getTime();

    const gap1 = dday1 - today;
    const gap2 = dday2 - today;
    const gap3 = dday3 - today;
    const gap4 = dday4 - today;
    const gap5 = dday5 - today;

    const day1 = Math.ceil(gap1 / (1000 * 60 * 60 * 24))-1;
    const day2 = Math.ceil(gap2 / (1000 * 60 * 60 * 24))-1;
    const day3 = Math.ceil(gap3 / (1000 * 60 * 60 * 24))-1;
    const day4 = Math.ceil(gap4 / (1000 * 60 * 60 * 24))-1;
    const day5 = Math.ceil(gap5 / (1000 * 60 * 60 * 24))-1;

    const hour1 = Math.ceil((gap1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))-1;
    const hour2 = Math.ceil((gap2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))-1;
    const hour3 = Math.ceil((gap3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))-1;
    const hour4 = Math.ceil((gap4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))-1;
    const hour5 = Math.ceil((gap5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))-1;
    
    const min1 = Math.ceil((gap1 % (1000 * 60 * 60)) / (1000 * 60))-1;
    const min2 = Math.ceil((gap2 % (1000 * 60 * 60)) / (1000 * 60))-1;
    const min3 = Math.ceil((gap3 % (1000 * 60 * 60)) / (1000 * 60))-1;
    const min4 = Math.ceil((gap4 % (1000 * 60 * 60)) / (1000 * 60))-1;
    const min5 = Math.ceil((gap5 % (1000 * 60 * 60)) / (1000 * 60))-1;
    
    const sec1 = Math.ceil((gap1 % (1000 * 60)) / 1000)-1;
    const sec2 = Math.ceil((gap2 % (1000 * 60)) / 1000)-1;
    const sec3 = Math.ceil((gap3 % (1000 * 60)) / 1000)-1;
    const sec4 = Math.ceil((gap4 % (1000 * 60)) / 1000)-1;
    const sec5 = Math.ceil((gap5 % (1000 * 60)) / 1000)-1;

    document.querySelector('.dDay1').innerHTML = "<span>D-" + day1 + "</span><span>" + hour1 + " : " + min1 + ": " + sec1 + "</span>";
    document.querySelector('.dDay2').innerHTML = "<span>D-" + day2 + "</span><span>" + hour2 + " : " + min2 + ": " + sec2 + "</span>";
    document.querySelector('.dDay3').innerHTML = "<span>D-" + day3 + "</span><span>" + hour3 + " : " + min3 + ": " + sec3 + "</span>";
    document.querySelector('.dDay4').innerHTML = "<span>D-" + day4 + "</span><span>" + hour4 + " : " + min4 + ": " + sec4 + "</span>";
    document.querySelector('.dDay5').innerHTML = "<span>D-" + day5 + "</span><span>" + hour5 + " : " + min5 + ": " + sec5 + "</span>";
}, 1000);

//section new end

//section rank start

// const rankNavItem = document.querySelectorAll('.rankNavItem');
// const rankMusical = document.querySelector('.rankMusical');
// const rankConcert = document.querySelector('.rankConcert');
// const rankTheater = document.querySelector('.rankTheater');
// const rankClassic = document.querySelector('.rankClassic');
// const rankEx = document.querySelector('.rankEx');
// const rankNavArr = [rankMusical, rankConcert, rankTheater, rankClassic, rankEx];

// const rankConMusical = document.querySelector('.rankConMusical');
// const rankConConcert = document.querySelector('.rankConConcert');
// const rankConTheater = document.querySelector('.rankConTheater');
// const rankConClassic = document.querySelector('.rankConClassic');
// const rankConEx = document.querySelector('.rankConEx');
// const rankConArr = [rankConMusical, rankConConcert, rankConTheater, rankConClassic, rankConEx]


//section rank end


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

    // const setNewLi = document.querySelectorAll('.newLi');
    // localStorage.setItem('newLi', setNewLi);

    // const getNewLi = localStorage.getItem('newLi');
    // listBoxUl.appendChild(getNewLi);
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
//리뷰창 end


