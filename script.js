// selecting 6+6
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
const allTab = document.getElementById("all-tab")
const interviewTab = document.getElementById("interview-tab")
const rejectedTab = document.getElementById("rejected-tab")
const allCards = document.getElementById("allCards")
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById('filtered-section')



// dashboard count 
function calculateCount(){
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

// btn toggle functionality
function toggleStyle(id){
    allTab.classList.remove('bg-[#3B82F6]','text-white');
    interviewTab.classList.remove('bg-[#3B82F6]','text-white');
    rejectedTab.classList.remove('bg-[#3B82F6]','text-white');


    allTab.classList.add('text-[#64748B]');
    interviewTab.classList.add('text-[#64748B]');
    rejectedTab.classList.add('text-[#64748B]');

    const selected = document.getElementById(id);
    
    selected.classList.add('bg-[#3B82F6]', 'text-white')
}

mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains("interview-btn")){

        const parentNode = event.target.parentNode.parentNode;
        const cardTitle = document.querySelector('.card-title').innerText;
        const cardSubTitle = document.querySelector('.card-subtitle').innerText;
        const location = document.querySelector('.location').innerText;
        const status = document.querySelector('.status').innerText;
        const cardDetails = document.querySelector('.card-details').innerText;

        parentNode.querySelector(".status").innerText = "interview"

        const cardInfo = {
            cardTitle,
            cardSubTitle, 
            location, 
            status: "interview", 
            cardDetails
        }

        const cardExist = interviewList.find(item => item.cardTitle == cardInfo.cardTitle)

        if (!cardExist) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.cardTitle != cardInfo.cardTitle)

        if (currentStatus == 'interview-tab') {
            renderRejected()
        }
        calculateCount();
    }
    
})


