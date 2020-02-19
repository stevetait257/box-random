const boxerRepo = new BoxerRepository();
const fightRepo = new FightRepository();
const boxerStorage = boxerRepo.getAll();


document.getElementById('start-fight').addEventListener('click', function () {
  let id, winner;
  const fightLocation = document.getElementById('location').value;
  const fighterA = document.getElementById('fighterA').value;
  const fighterB = document.getElementById('fighterB').value;
  const actionsOfFight = [];

  const fight = new Fight(id, fightLocation, fighterA, fighterB, actionsOfFight, winner)

});
