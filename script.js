// selecting 
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-tab';

let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let jobCount = document.getElementById('job-count')
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
    jobCount.innerText = allCards.children.length;
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

    

    currentStatus = id;
    


    if (id == 'interview-tab') {
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview();
    } else if (id == 'all-tab') {
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'rejected-tab') {
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected();
    }
}

// main events 
mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains("interview-btn")){

        // const parentNode = event.target.parentNode.parentNode;
        const parentNode = event.target.closest('.card');
        const cardTitle = parentNode.querySelector('.card-title').innerText;
        const cardSubTitle = parentNode.querySelector('.card-subtitle').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const cardDetails = parentNode.querySelector('.card-details').innerText;

        parentNode.querySelector(".status").innerText = "interview";

        // allCards.removeChild(parentNode);
        parentNode.remove();

        let cardInfo = {
            cardTitle,
            cardSubTitle, 
            location, 
            status: "interview", 
            cardDetails
        }

        const cardExist = interviewList.find(item => item.cardTitle == cardInfo.cardTitle);

        if (!cardExist) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.cardTitle != cardInfo.cardTitle);

        if (currentStatus == 'interview-tab') {
            renderInterview()
        }
        // toggleStyle('interview-tab');
        calculateCount();

    }else if(event.target.classList.contains("rejected-btn")){

        // const parentNode = event.target.parentNode.parentNode;
        const parentNode = event.target.closest('.card');
        const cardTitle = parentNode.querySelector('.card-title').innerText;
        const cardSubTitle = parentNode.querySelector('.card-subtitle').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const cardDetails = parentNode.querySelector('.card-details').innerText;

        parentNode.querySelector(".status").innerText = "rejected";

        // allCards.removeChild(parentNode);
        parentNode.remove();

        let cardInfo = {
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
            renderRejected();
        }
        // toggleStyle('rejected-tab');
        calculateCount();
    }else if (event.target.closest('.card-delete-btn')) {

    const parentNode = event.target.closest('.card');
    const cardTitle = parentNode.querySelector('.card-title').innerText;

    // Remove from interview list
    interviewList = interviewList.filter(item => item.cardTitle !== cardTitle);

    // Remove from rejected list
    rejectedList = rejectedList.filter(item => item.cardTitle !== cardTitle);

    // Remove from DOM
    parentNode.remove();

    calculateCount();

    // Re-render if needed (for empty message)
    if (currentStatus === 'interview-tab') {
        renderInterview();
    } else if (currentStatus === 'rejected-tab') {
        renderRejected();
    }
}



    
})


// rendering function - interview 

function renderInterview(){
    filterSection.innerHTML = '';

    if (interviewList.length === 0) {
    filterSection.innerHTML = `
        <p class="text-center text-gray-500 font-semibold py-10">
            <img src="./jobs.png" alt="No Jobs" class="w-40 opacity-70 mx-auto">
            No jobs available
        </p>
    `;
    return;
}

    for(let interview of interviewList){

        let div = document.createElement('div');
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
                    <button class=" p-2.5 border-2 rounded-[50%]"><i class="fa-regular fa-trash-can"></i></button>
                </div> 
        
        `
        filterSection.appendChild(div);
    }
}

// rendering finction - rejected 
function renderRejected(){
    filterSection.innerHTML = '';

    if (rejectedList.length === 0) {
    filterSection.innerHTML = `
        <p class="text-center text-gray-500 font-semibold py-10">
            <img src="./jobs.png" alt="No Jobs" class="w-40 opacity-70 mx-auto">
            No jobs available
        </p>
    `;
    return;
}

    for(let rejected of rejectedList){

        let div = document.createElement('div');
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
                    <button class=" p-2.5 border-2 rounded-[50%]"><i class="fa-regular fa-trash-can"></i></button>
                </div> 
        
        `
        filterSection.appendChild(div);
    }
}




