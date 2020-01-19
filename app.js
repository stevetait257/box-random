const saveBoxer = document.querySelector('#saveBoxer')
saveBoxer.addEventListener('click', createBoxer);
// const editBoxer = document.querySelector('#editBoxer');
// editBoxer.addEventListener('click', editBoxer);

function createBoxersArray() {
  const newBoxer = [
    firstName.value,
    lastName.value,
    nationality.value,
    weightClass.value,
  ]
  localStorage.setItem('boxers', JSON.stringify(newBoxer));
}

function updateBoxersArray() {
  // debugger;
  const newBoxer = [
    firstName.value,
    lastName.value,
    nationality.value,
    weightClass.value,
  ];
  const previousBoxers = JSON.parse(localStorage.getItem('boxers'));
  const tempBoxers = [...previousBoxers];
  newBoxer.push(...tempBoxers);
  localStorage.setItem('boxers', JSON.stringify(newBoxer));
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
