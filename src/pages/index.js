const boxerRepos = new BoxerRepository();
const boxerStorage = boxerRepos.getAll();
const table = document.querySelector('#boxer-list');

table.addEventListener('click', function (e) {
  if (e.target && e.target.matches('.edit')) {
    boxerRepos.editBoxer(e);
  }
  if (e.target && e.target.matches('.delete')) {
    boxerRepos.deleteBoxer(e);
  }
});



(function printBoxers() {

  boxerStorage.forEach(boxer => {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    const deleteBoxerButton = document.createElement('a');
    deleteBoxerButton.href = `index.html?id=${boxer.id}`;
    deleteBoxerButton.hash = `${boxer.id}`;
    deleteBoxerButton.textContent = 'delete';
    deleteBoxerButton.className = 'delete';
    const editBoxerButton = document.createElement('a');
    editBoxerButton.textContent = 'edit ';
    editBoxerButton.className = 'edit ';
    editBoxerButton.href = `index.html?id=${boxer.id}`;
    editBoxerButton.hash = `${boxer.id}`;
    tr.appendChild(editBoxerButton);
    tr.appendChild(deleteBoxerButton);

    const boxerData = [
      `${boxer.firstName} ${boxer.lastName}`,
      `Wins: ${boxer.wins} `,
      ` Losses: ${boxer.losses} `
    ];
    boxerData.forEach(el => {
      const td = document.createElement('td');
      td.textContent = [el];
      tr.appendChild(td);
    });

  });
})();
