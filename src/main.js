const saveBoxer = document.querySelector("#save-boxer")
saveBoxer.addEventListener("click", createBoxer);

const editBoxer = document.querySelector("#editBoxer");
// editBoxer.addEventListener("click", editBoxer);

let id = localStorage.getItem('id') || localStorage.setItem('id', 1);

// create an incrementer for the Id of the boxer.
// function getId() {
//   (localStorage.getItem('id')) ? id = localStorage.getItem('id') + 1: id = localStorage.setItem('id', '0');

// };

// add 1 to i each time xa boxer is created and remove one each time one 
// is deleted



function createBoxersArray() {
  const boxers = [];
  const newBoxer = {
    id: id,
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
    id: id,
    firstName: firstName.value,
    lastName: lastName.value,
    nationality: nationality.value,
    weightClass: weightClass.value,
    wins: 0,
    losses: 0
  };
  const boxers = JSON.parse(localStorage.getItem("boxers"));
  boxers.push(newBoxer);
  console.dir(newBoxer);
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
  //id++;
  //localStorage.setItem('id', ) = id;
};

function deleteBoxers() {
  localStorage.removeItem('boxers');

}
