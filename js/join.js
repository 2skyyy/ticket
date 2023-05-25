const joinIdInput = document.querySelector('.joinIdInput');
const joinPwInput = document.querySelector('.joinPwInput');
const joinPwInput2 = document.querySelector('.joinPwInput2');
const userName = document.querySelector('.userName');

const errorJoinId = document.querySelector('.errorJoinId');
const errorJoinPw = document.querySelector('.errorJoinPw');
const errorJoinPw2 = document.querySelector('.errorJoinPw2');
const errorJoinName = document.querySelector('.errorJoinName');

const joinBtn = document.querySelector('.joinBtn');

joinBtn.addEventListener('click', () => {
    if(joinIdInput.value.trim() == ""){
        errorJoinId.textContent = "**id를 입력해주세요."
    }else if(joinIdInput.value.trim().length < 6 || 12 < joinIdInput.value.trim().length){
        errorJoinId.textContent = "**id는 6~12글자로 입력해주세요."
    }
    else if(joinPwInput.value.trim() == ""){
        errorJoinPw.textContent = "**password를 입력해주세요."
    }else if(joinPwInput.value.trim().length < 8 || joinPwInput.value.trim().length > 12){
        errorJoinPw.textContent = "**password는 8~12글자로 입력해주세요."
    }
    else if(joinPwInput2.value.trim() == ""){
        errorJoinPw2.textContent = "**password를 한번 더 입력해주세요."
    }else if(joinPwInput.value != joinPwInput2.value){
        errorJoinPw2.textContent = "**password가 일치하지 않습니다."
    }
    else if(userName.value.trim() == ""){
        errorJoinName.textContent = "**이름(닉네임)을 입력해주세요."
    }else if(userName.value.trim().length < 2 || 5 < userName.value.trim().length){
        errorJoinName.textContent = "**이름(닉네임)은 2~5글자로 입력해주세요."
    }
    else{
        alert(userName.value + '님 회원가입이 완료되었습니다.');
        
        const yourId = joinIdInput.value;
        localStorage.setItem('joinIdInput', yourId);
        const yourPw = joinPwInput.value;
        localStorage.setItem('joinPwInput', yourPw);
        const yourName = userName.value;
        localStorage.setItem('userName', yourName);
        
        const loginPage = 'login.html';
        location.href = loginPage; //회원가입 완료시 메인페이지 자동 로그인
    }
})
