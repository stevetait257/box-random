const boxerRepo = new BoxerRepository();
const ul = document.querySelector('#boxer-data');

if (location.search) {
  displayBoxer();
}

function displayBoxer() {
  const boxerId = location.search.slice(4);
  const boxerAndIndexArray = boxerRepo.getById(boxerId);
  const boxer = boxerAndIndexArray[0];
  const boxerName = document.getElementById('boxer');

  boxerName.innerText = `${boxer.firstName} ${boxer.lastName}`;
  const boxerData = [
    `Nationality: ${boxer.nationality}`, `Division: ${boxer.weightClass}`,
    `Born: ${boxer.dateOfBirth}`, `Stance: ${boxer.stance}`,
    `Wins: ${boxer.wins} `,
    ` Losses: ${boxer.losses} `,
  ];
  boxerData.forEach(el => {
    const li = document.createElement('li');
    li.className = 'boxerInfo'
    li.textContent = el
    ul.appendChild(li);
  });

}
