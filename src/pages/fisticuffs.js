const boxerRepo = new BoxerRepository();
const fightRepo = new FightRepository();
const boxerStorage = boxerRepo.getAll();
const fightStorage = fightRepo.getAll();

const fighterA = document.getElementById('fighterA');
const fighterB = document.getElementById('fighterB');


boxerStorage.forEach(boxer => {
  const optionA = document.createElement('option');
  const optionB = document.createElement('option');
  optionA.innerText = `${boxer.firstName} ${boxer.lastName}`;
  optionB.innerText = `${boxer.firstName} ${boxer.lastName}`;
  fighterA.appendChild(optionA);
  fighterB.appendChild(optionB);
});

document.getElementById('set-fight').addEventListener('click', function () {
  let id, winner;
  const fightLocation = document.getElementById('location').value;
  const fighterA = document.getElementById('fighterA').value;
  const fighterB = document.getElementById('fighterB').value;
  // const actionsOfFight = [];

  const fight = new Fight(id, fightLocation, fighterA, fighterB, winner)

});
