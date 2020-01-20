// alert('hey how ya going, mate?!');

const boxerStorage = JSON.parse(localStorage.getItem('boxers'));
const ul = document.querySelector('ul');

const liMaker = (boxerInfo) => {
  const li = document.createElement('li');
  li.textContent = boxerInfo;
  ul.appendChild(li);
};

(function printBoxers() {
  boxerStorage.forEach(e => {
    liMaker(`Name: ${e.firstName} ${e.lastName}, Record: ${e.record}`)
    console.log(`Name: ${e.firstName} ${e.lastName}, Record: ${e.record}`);
  });
})();
