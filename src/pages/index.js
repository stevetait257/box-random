const boxerRepos = new BoxerRepository();
const boxerStorage = boxerRepos.getAll();
const table = document.querySelector('#boxer-list');

table.addEventListener('click', function (e) {
  if (e.target && e.target.matches('.delete')) {
    boxerRepos.delete(e);
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
    editBoxerButton.href = `form.html?id=${boxer.id}`;
    editBoxerButton.hash = `${boxer.id}`;
    const viewBoxerButton = document.createElement('a');
    viewBoxerButton.textContent = 'view ';
    viewBoxerButton.className = 'view ';
    viewBoxerButton.href = `view.html?id=${boxer.id}`;
    viewBoxerButton.hash = `${boxer.id}`;
    tr.appendChild(viewBoxerButton);
    tr.appendChild(editBoxerButton);
    tr.appendChild(deleteBoxerButton);

    const boxerData = [
      `${boxer.firstName} ${boxer.lastName}`,
      `Wins: ${boxer.wins} `,
      ` Losses: ${boxer.losses} `
    ];
    boxerData.forEach(el => {
      const td = document.createElement('td');
      td.textContent = el;
      tr.appendChild(td);
    });

  });
})();
