// selecting 6+6
let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
const allTab = document.getElementById("all-tab")
const interviewTab = document.getElementById("interview-tab")
const rejectedTab = document.getElementById("rejected-tab")
const allCards = document.getElementById("allCards")



function calculateCount(){
    totalCount.innerText = allCards.children.length;
}

calculateCount();


