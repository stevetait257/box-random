// const saveBoxer = document.querySelector("#save-boxer")

// saveBoxer.addEventListener("click", createBoxer);
// // const editBoxer = document.querySelector("#editBoxer");
// // editBoxer.addEventListener("click", editBoxer);


function createBoxersArray() {
  const boxers = [];
  const newBoxer = {
    firstName: firstName.value,
    lastName: lastName.value,
    nationality: nationality.value,
    weightClass: weightClass.value,
    wins: 0,
    losses: 0
  };
  boxers.push(newBoxer);
  localStorage.setItem("boxers", JSON.stringify(boxers));
};

function updateBoxersArray() {
  const newBoxer = {
    firstName: firstName.value,
    lastName: lastName.value,
    nationality: nationality.value,
    weightClass: weightClass.value,
    wins: 0,
    losses: 0
  };
  const boxers = JSON.parse(localStorage.getItem("boxers"));
  boxers.push(newBoxer)
  localStorage.setItem("boxers", JSON.stringify(boxers));
};

function createBoxer() {
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const nationality = document.querySelector("#nationality");
  const weightClass = document.querySelector("#weightClass");
  if (!localStorage.getItem("boxers")) {
    createBoxersArray(firstName, lastName, nationality, weightClass);
  } else {
    console.log("Boxer exists");
    updateBoxersArray(firstName, lastName, nationality, weightClass);
  }
};

(function displayBoxers() {
  const boxersToDisplay = JSON.parse(localStorage.getItem("boxers"));
  const cardsRow = document.querySelector("#boxer-container")
  boxersToDisplay.forEach(function (e) {

    const card = document.createElement("div")
    card.className = "card border-dark mb-3";
    const cardHeader = document.createElement("div")
    cardHeader.className = "card-header";
    cardHeader.textContent = e.firstName;
    const cardBody = document.createElement("div")
    cardBody.className = "card-body text-dark"
    cardBody.textContent = e.lastName;
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardsRow.appendChild(card);
  });
})();

function editBoxer(){
  

}
