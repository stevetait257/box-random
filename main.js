const saveBoxer = document.querySelector('#saveBoxer')
saveBoxer.addEventListener('click', createBoxer);
// const editBoxer = document.querySelector('#editBoxer');
// editBoxer.addEventListener('click', editBoxer);


function createBoxersArray() {
  const boxers = [];
  const newBoxer = {
    firstName: firstName.value,
    lastName: lastName.value,
    nationality: nationality.value,
    weightClass: weightClass.value,
    record: 0-0
  };
  boxers.push(newBoxer);
  localStorage.setItem('boxers', JSON.stringify(boxers));
}

function updateBoxersArray() {
  // debugger;
  const newBoxer = {
    firstName: firstName.value,
    lastName: lastName.value,
    nationality: nationality.value,
    weightClass: weightClass.value,
    record: 0-0

  };
  const boxers = JSON.parse(localStorage.getItem('boxers'));
  boxers.push(newBoxer)
  localStorage.setItem('boxers', JSON.stringify(boxers));

  // localStorage.setItem('boxers', JSON.stringify());
}

function createBoxer() {
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const nationality = document.querySelector("#nationality");
  const weightClass = document.querySelector("#weightClass");
  // debugger;
  if (!localStorage.getItem('boxers')) {
    createBoxersArray(firstName, lastName, nationality, weightClass);
  } else {
    console.log('Boxer exists');
    updateBoxersArray(firstName, lastName, nationality, weightClass);
  }
}

// function editBoxer() {

// }

function liMaker(boxer) {
  const li = document.createElement('li');
  li.textContent = boxer;
  ul.appendChild(li);
}
