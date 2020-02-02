//code that interacts with your user interface
/*

<form>
<input id="firstName">
<input id="lastName">
<button id="create">
</form>
*/

document.querySelector('#save').addEventListener('click', function () {

  const boxerRepo = new BoxerRepository();

  boxerRepo.edit(this.index);

})

document.querySelector('#create').addEventListener('click', function () {
  const boxerRepo = new BoxerRepository();
  let id;
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const nationality = document.querySelector('#nationality').value;
  const weightClass = document.querySelector('#weightClass').value;
  const wins = 0;
  const losses = 0;
  const boxer = new Boxer(id, firstName, lastName, nationality, weightClass, wins, losses);
  boxerRepo.create(boxer);
})



// new Boxer(...........);
