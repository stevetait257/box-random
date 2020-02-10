//code that interacts with your user interface
const boxerRepo = new BoxerRepository();

function getBoxerByIdFromURL() {
  const params = new Map(location.search.slice(1).split('&').map(keyValuePair => keyValuePair.split('=')))
  const boxerId = params.get('id');
  console.log(boxerId)
  return boxerId;
}

function populateFormFromBoxer(boxer) {

  document.querySelector('#firstName').value = `${boxer.firstName}`;
  document.querySelector('#lastName').value = `${boxer.lastName}`;
  document.querySelector('#nationality').value = `${boxer.nationality}`;
  document.querySelector('#weightClass').value = `${boxer.weightClass}`;
  document.querySelector('#dateOfBirth').value = `${boxer.dateOfbirth}`;
  document.querySelector('#stance').value = `${boxer.stance}`;
}

if (location.search) {
  const boxerId = getBoxerByIdFromURL();
  const boxer = boxerRepo.getById(boxerId);
  populateFormFromBoxer(boxer);
}

document.querySelector('#save').addEventListener('click', function () {
  if (!location.search) {
    let id;
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const nationality = document.querySelector('#nationality').value;
    const weightClass = document.querySelector('#weightClass').value;
    const dateOfBirth = document.querySelector('#dateOfBirth').value;
    const stance = document.querySelector('#stance').value;
    const wins = 0;
    const losses = 0;
    const boxer = new Boxer(id, firstName, lastName, nationality, weightClass, dateOfBirth, stance, wins, losses);
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
    boxerRepo.save(boxer, boxerIndex);
  }
});
