const seat = document.querySelector('.seat');
const abc = ["A","B","C","D","E","F","G","H"];
const seatNum = document.querySelector('.seatNum');

for(let i=0; i<abc.length; i++){
    const newCol = document.createElement('div');
    newCol.classList.add('newCol');
    newCol.id = `${abc[i]}`;
    const newSpan = document.createElement('span');
    newSpan.classList.add('newSpan');
    newSpan.textContent = `${abc[i]}`;
    seatNum.appendChild(newSpan);

    for(let j=1; j<=20; j++){
        const newA = document.createElement('a');
        newA.classList.add('newA');
        newA.id = `${j}`;
        newA.textContent = `${j}`;
        newCol.appendChild(newA);
    }
    seat.appendChild(newCol);
}

const newCol = document.querySelectorAll('.newCol');
const newA = document.querySelectorAll('.newA');
const showTicket = document.querySelector('.showTicket');
const username = document.querySelector('.username');
const getName = localStorage.getItem('userName');
const getId = localStorage.getItem('joinIdInput');
username.textContent = `${getName}(${getId})님`;
const ticketTxt = document.querySelector('.ticketTxt');

newA.forEach((i)=>{
    i.addEventListener('click', (e)=>{
        e.preventDefault();
        if(confirm(`${i.parentElement.id}열 ${i.id}번 좌석을 예매하시겠습니까?`)){
            showTicket.style.display ="flex";
            ticketTxt.textContent = `${i.parentElement.id}-${i.id} 좌석 예매 완료되었습니다.`;
        }
    })
})

const ticketDel = document.querySelector('.ticketDel');

ticketDel.addEventListener('click', () => {
    showTicket.style.display ="none";
})


