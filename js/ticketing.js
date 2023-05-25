const rever = document.querySelector('.rever');
const abc = ["A","B","C","D","E","F","G","H"];

for(let i=0; i<abc.length; i++){
    const newCol = document.createElement('div');
    newCol.classList.add('newCol');
    newCol.id = `${abc[i]}`;

    for(let j=1; j<=20; j++){
        const newA = document.createElement('a');
        newA.classList.add('newA');
        newA.id = `${j}`;
        newCol.appendChild(newA);
    }
    rever.appendChild(newCol);
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
        if(confirm(`${i.parentElement.id}-${i.id} 좌석을 예매하시겠습니까?`)){
            showTicket.style.display ="flex";
            ticketTxt.textContent = `${i.parentElement.id}-${i.id} 좌석 예매 완료되었습니다.`;
        }
    })
})

const ticketDel = document.querySelector('.ticketDel');

ticketDel.addEventListener('click', () => {
    showTicket.style.display ="none";
})


