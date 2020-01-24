const boxerStorage = JSON.parse(localStorage.getItem("boxers")) || [];
const table = document.querySelector("#boxer-list");

(function printBoxers() {

  boxerStorage.forEach(boxer => {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    const deleteBoxerButton = document.createElement('a');
    deleteBoxerButton.href = `index.html?id=${boxer.id}`;
    deleteBoxerButton.textContent = 'delete';
    const editBoxerButton = document.createElement('a');
    editBoxerButton.textContent = 'edit ';
    editBoxerButton.href = `form.html?id=${boxer.id}`;
    tr.appendChild(editBoxerButton);
    tr.appendChild(deleteBoxerButton);

    const boxerData = [
      `${boxer.firstName} ${boxer.lastName}`,
      `Wins: ${boxer.wins} `,
      ` Losses: ${boxer.losses} `
    ];
    boxerData.forEach(el => {

      const td = document.createElement('td');

      //this does not work outside of this foreach 

      td.textContent = [el];
      tr.appendChild(td);
    });

  });
})();
