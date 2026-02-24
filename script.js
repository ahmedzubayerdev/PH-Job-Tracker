// selecting 6+6
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-tab';

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

// main events 
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

    }else if(event.target.classList.contains("rejected-btn")){

        const parentNode = event.target.parentNode.parentNode;
        const cardTitle = document.querySelector('.card-title').innerText;
        const cardSubTitle = document.querySelector('.card-subtitle').innerText;
        const location = document.querySelector('.location').innerText;
        const status = document.querySelector('.status').innerText;
        const cardDetails = document.querySelector('.card-details').innerText;

        parentNode.querySelector(".status").innerText = "rejected"

        const cardInfo = {
            cardTitle,
            cardSubTitle, 
            location, 
            status: "rejected", 
            cardDetails
        }

        const cardExist = rejectedList.find(item => item.cardTitle == cardInfo.cardTitle);

        if (!cardExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.cardTitle != cardInfo.cardTitle)

        if (currentStatus == "rejected-tab") {
            renderInterview();
        }
        calculateCount();
    }
    
})


// rendering function - interview 

function renderInterview(){
    filterSection.innerHTML = '';

    for(let interview of interviewList){

        let div = document.createComment('div');
        div.className = "card flex justify-between sm:p-6";
        div.innerHTML = `

              <div class="card-content space-y-5">
                    <div>   
                        <h2 class="card-title text-[#002C5C] font-bold">${interview.cardTitle}</h2>
                        <p class="card-subtitle text-[#64748B]">${interview.cardSubTitle}</p>
                    </div>
                    <p class="location text-[#64748B]">${interview.location}</p>
                    <div>
                    <p class="status py-2 px-3 text-[#002C5C] font-medium">${interview.status}</p>
                    <p class="card-details text-[#323B49]">${interview.cardDetails}</p>
                        </div>
                    <div class="card-btn space-y-2.5 ">
                        <button class=" interview-btn mr-2 text-[#10B981] border-2 rounded py-2 px-3 font-semibold sm:mb-2.5">INTERVIEW</button>
                        <button class="rejected-btn mr-2 text-[#EF4444] border-2 rounded py-2 px-3 font-semibold">REJECTED   </button>
                        
                    </div>
                </div>  

                <div class="card-delete-btn">
                    <button><i class="fa-regular fa-trash-can"></i></button>
                </div> 
        
        `
        filterSection.appendChild(div);
    }
}

// rendering finction - rejected 
function renderRejected(){
    filterSection.innerHTML = '';

    for(let rejected of rejectedList){

        let div = document.createComment('div');
        div.className = "card flex justify-between sm:p-6";
        div.innerHTML = `

              <div class="card-content space-y-5">
                    <div>   
                        <h2 class="card-title text-[#002C5C] font-bold">${rejected.cardTitle}</h2>
                        <p class="card-subtitle text-[#64748B]">${rejected.cardSubTitle}</p>
                    </div>
                    <p class="location text-[#64748B]">${rejected.location}</p>
                    <div>
                    <p class="status py-2 px-3 text-[#002C5C] font-medium">${rejected.status}</p>
                    <p class="card-details text-[#323B49]">${rejected.cardDetails}</p>
                        </div>
                    <div class="card-btn space-y-2.5 ">
                        <button class=" interview-btn mr-2 text-[#10B981] border-2 rounded py-2 px-3 font-semibold sm:mb-2.5">INTERVIEW</button>
                        <button class="rejected-btn mr-2 text-[#EF4444] border-2 rounded py-2 px-3 font-semibold">REJECTED   </button>
                        
                    </div>
                </div>  

                <div class="card-delete-btn">
                    <button><i class="fa-regular fa-trash-can"></i></button>
                </div> 
        
        `
        filterSection.appendChild(div);
    }
}




