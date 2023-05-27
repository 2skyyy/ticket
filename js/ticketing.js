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
        newA.id = `${abc[i]}-${j}`;
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
const soldOut = [];

const getSoldOut = localStorage.getItem("soldOut");


const soldOutFun = () => {

    if(getSoldOut != null){
        const getSoldd = getSoldOut.split(',');
        getSoldd.forEach((j)=>{
            soldOut.push(j);
        })
    }
        
    soldOut.forEach((i)=>{
        document.querySelector(`#${i}`).style.background = "gray"
    })
}
soldOutFun();

// const getSoldout = localStorage.getItem("soldOut");

// getSoldout.forEach((i) => {
//     i.style.background = "gray"
// })

newA.forEach((i)=>{
    i.addEventListener('click', (e)=>{
        e.preventDefault();
        if(soldOut.includes(i.id) == false){
            if(confirm(`${i.parentElement.id}열 ${i.id}번 좌석을 예매하시겠습니까?`)){
                showTicket.style.display ="flex";
                ticketTxt.textContent = `${i.id} 좌석 예매 완료되었습니다.`;
                i.style.background = "gray";
                soldOut.push(i.id);
                JSON.stringify(localStorage.setItem("soldOut", soldOut));
            }
        }else{
            alert('이미 선택된 좌석입니다')
        }
    })
})

const ticketDel = document.querySelector('.ticketDel');

ticketDel.addEventListener('click', () => {
    showTicket.style.display ="none";
})


