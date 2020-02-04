//code that interacts with your user interface
const boxerRepo = new BoxerRepository();

if (location.search) {
  const boxerId = location.search.slice(4);
  const boxerData = boxerRepo.getById(boxerId);
  const boxer = boxerData[0];
  console.log(`${boxer.firstName} ${boxer.lastName} is a mean stabby dictator`);

  const firstName = document.querySelector('#firstName').value = `${boxer.firstName}`;
  const lastName = document.querySelector('#lastName').value = `${boxer.lastName}`;
  const nationality = document.querySelector('#nationality').value = `${boxer.nationality}`;
  const weightClass = document.querySelector('#weightClass').value = `${boxer.weightClass}`;
}

document.querySelector('#save').addEventListener('click', function () {
  if (!location.search) {
    let id;
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const nationality = document.querySelector('#nationality').value;
    const weightClass = document.querySelector('#weightClass').value;
    const wins = 0;
    const losses = 0;
    const boxer = new Boxer(id, firstName, lastName, nationality, weightClass, wins, losses);
    boxerRepo.create(boxer);

  } else {
    const boxerId = location.search.slice(4);
    const boxerData = boxerRepo.getById(boxerId)
    const boxer = boxerData[0];
    const boxerIndex = boxerData[1];
    boxer.firstName = document.querySelector('#firstName').value;
    boxer.lastName = document.querySelector('#lastName').value;
    boxer.nationality = document.querySelector('#nationality').value;
    boxer.weightClass = document.querySelector('#weightClass').value;
    boxerRepo.save(boxer, boxerIndex);
    console.log(boxer);
    // boxerRepo.save(boxer)

  }


})
