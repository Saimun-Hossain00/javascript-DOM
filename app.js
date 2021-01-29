// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");

// changeColor.addEventListener("click", function(){
//     text.classList.toggle("change")
// });


const userList = document.querySelector( ".name-list li");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function(){
 // create on li out of thin air

 const newLi = document.createElement("LI");
 const liContent = document.createTextNode(listInput.value);
 //Add the input value inside that new list
 newLi.appendChild(liContent);
 //Attaching the li to the user list
 userList.appendChild(newLi);
});


// for(user of userList){
//    user.addEventListener("click", function(){
//      this.style.color = "red";
//    });  
// }
// console.log(listInput.value);
