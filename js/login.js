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
        const setId = localStorage.getItem('joinIdInput');
        const setPw = localStorage.getItem('joinPwInput');
        if(idInput.value == setId && pwInput.value == setPw){
            const mainPage = '../index.html';
            location.href = mainPage;
        }else{
            alert('아이디 혹은 비밀번호가 잘못되었습니다.')
        }
        
    }
})