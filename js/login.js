const idInput = document.querySelector('.idInput');
const pwInput = document.querySelector('.pwInput');
const loginBtn = document.querySelector('.loginBtn');


const errorId = document.querySelector('.errorId');
const errorPw = document.querySelector('.errorPw');


loginBtn.addEventListener('click', () => {
    if(idInput.value.trim() == ""){
        errorId.textContent = "**id를 입력해주세요"
    }else if(pwInput.value.trim() == ""){
        errorPw.textContent = "**password를 입력해주세요"
    }else{
        const mainPage = '../index.html';
        location.href = mainPage;
    }
})