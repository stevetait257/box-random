//code that interacts with your user interface
const boxerRepo = new BoxerRepository();

function populateFormFromBoxer(boxer) {

  document.querySelector('#firstName').value = `${boxer.firstName}`;
  document.querySelector('#lastName').value = `${boxer.lastName}`;
  document.querySelector('#nationality').value = `${boxer.nationality}`;
  document.querySelector('#weightClass').value = `${boxer.weightClass}`;
  document.querySelector('#dateOfBirth').value = `${boxer.dateOfBirth}`;
  document.querySelector('#stance').value = `${boxer.stance}`;
  document.querySelector('#health').value = `${boxer.health}`;
  document.querySelector('#damage').value = `${boxer.damage}`;
  document.querySelector('#agility').value = `${boxer.agility}`;
}

if (location.search) {
  const boxerId = getBoxerByIdFromURL();
  const boxer = boxerRepo.getById(boxerId);
  populateFormFromBoxer(boxer);
}

document.querySelector('#save').addEventListener('click', function () {
  const validForm = document.forms[0].checkValidity();
  if (!validForm) {
    return;
  }

  if (!location.search) {
    let id;
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const nationality = document.querySelector('#nationality').value;
    const weightClass = document.querySelector('#weightClass').value;
    const dateOfBirth = document.querySelector('#dateOfBirth').value;
    const stance = document.querySelector('#stance').value;
    const health = document.querySelector('#health').value
    const damage = document.querySelector('#damage').value
    const agility = document.querySelector('#agility').value

    const boxer = new Boxer(id, firstName, lastName, nationality, weightClass, dateOfBirth, stance, health, damage, agility);
    boxerRepo.save(boxer);
    window.location.reload();

  } else {
    const boxerId = getBoxerByIdFromURL();
    const boxer = boxerRepo.getById(boxerId);
    const boxerIndex = boxerRepo.getIndex(boxerId);
    boxer.firstName = document.querySelector('#firstName').value;
    boxer.lastName = document.querySelector('#lastName').value;
    boxer.nationality = document.querySelector('#nationality').value;
    boxer.weightClass = document.querySelector('#weightClass').value;
    boxer.dateOfBirth = document.querySelector('#dateOfBirth').value;
    boxer.stance = document.querySelector('#stance').value;
    boxer.health = document.querySelector('#health').value;
    boxer.damage = document.querySelector('#damage').value;
    boxer.agility = document.querySelector('#agility').value;
    boxerRepo.save(boxer, boxerIndex);
  }


});
