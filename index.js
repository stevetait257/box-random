// alert('hey how ya going, mate?!');

const boxerStorage = JSON.parse(localStorage.getItem('boxers'));
const ul = document.querySelector('.boxer-list');

const liMaker = (boxerInfo) => {
  const li = document.createElement('li');
  li.textContent = boxerInfo;
  ul.appendChild(li);
  console.log(li);
};

(function printBoxers() {
  boxerStorage.forEach(e => {
    liMaker(`Name: ${e.firstName} ${e.lastName},  Wins: ${e.wins} | Losses: ${e.losses}`);
 
  });
})();
