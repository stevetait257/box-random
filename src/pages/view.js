const boxerRepo = new BoxerRepository();
const ul = document.querySelector('#boxer-data');

if (location.search) {
  displayBoxer();
}

function displayBoxer() {
  const boxerId = getBoxerByIdFromURL()
  const boxer = boxerRepo.getById(boxerId);
  const boxerName = document.getElementById('boxer');

  boxerName.innerText = `${boxer.firstName} ${boxer.lastName}`;
  const boxerData = [
    `Nationality: ${boxer.nationality}`, `Division: ${boxer.weightClass}`,
    `Born: ${boxer.dateOfBirth}`, `Stance: ${boxer.stance}`,
    `Wins: ${boxer.wins} `,
    ` Losses: ${boxer.losses} `
  ];
  boxerData.forEach(el => {
    const li = document.createElement('li');
    li.className = 'boxerInfo'
    li.textContent = el
    ul.appendChild(li);
  });

}
