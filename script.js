const filterButtons=document.querySelectorAll(".filter_button button");
const polaroid=documnet.querySelectorAll("div.polaroid .col-p");
// console.log(filterButtons,polaroid);
//define the filterable card function
const filtercard=e=>{
    document.querySelector("#active").classList.remove("#active");
    e.target.classList.add("#active");
  
}
//Add click button listener to each feature
filterButtons.forEach(button=>button.addEventListener("click",polaroid));