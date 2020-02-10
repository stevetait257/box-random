// alert("hey how ya going, mate?!");

const boxerStorage = JSON.parse(localStorage.getItem("boxers"));
const table = document.querySelector("#boxer-list");


(function printBoxers() {
  boxerStorage.forEach(e => {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    const boxerData = [
      `Name: ${e.firstName} ${e.lastName}`,
      `Wins: ${e.wins} `,
      ` Losses: ${e.losses} `
    ];

    boxerData.forEach(el => {
      const td = document.createElement("td");
      td.textContent = [el];
      tr.appendChild(td);
    });

  });
})();
