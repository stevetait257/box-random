const boxerRepo = new BoxerRepository();
const fightRepo = new FightRepository();
const boxerStorage = boxerRepo.getAll();
const fightStorage = fightRepo.getAllFights();

const fighterA = document.getElementById('fighterA');
const fighterB = document.getElementById('fighterB');

boxerStorage.forEach(boxer => {

  const optionA = document.createElement('option');
  const optionB = document.createElement('option');
  optionA.innerText = `${boxer.firstName} ${boxer.lastName}`;
  optionA.classList = 'boxers'
  optionA.dataset.boxerId = `${boxer.id}`
  optionB.innerText = `${boxer.firstName} ${boxer.lastName}`;
  optionA.classList = 'boxers'
  optionB.dataset.boxerId = `${boxer.id}`
  fighterA.appendChild(optionA);
  fighterB.appendChild(optionB);
});

function setFightProperties() {
  let id, winner;
  const fightLocation = document.getElementById('location').value;
  const boxerNodes = document.querySelectorAll('.boxers');
  const boxers = [...boxerNodes];
  // const actionsOfFight = [];
  const blueCorner = boxerRepo.getById(boxers[0].dataset.boxerId);
  const redCorner = boxerRepo.getById(boxers[1].dataset.boxerId);
  const fight = new Fight(id, fightLocation, blueCorner, redCorner, winner);
  renderBoxers(fight);

}

document.getElementById('start-fight').addEventListener('click', function () {
  setFightProperties();
});

function renderBoxers(fight) {

  const fightObj = fight;
  console.dir(fightObj)
  // const blueCornerBoxer = document.getElementById('blue-name');
  // blueCornerBoxer.innerHTML = fightObj


}
