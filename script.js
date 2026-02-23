// selecting 6+6
let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
const allTab = document.getElementById("all-tab")
const interviewTab = document.getElementById("interview-tab")
const rejectedTab = document.getElementById("rejected-tab")
const allCards = document.getElementById("allCards")
const mainContainer = document.querySelector("main");


// dashboard count 
function calculateCount(){
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

// toggle functionality
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


