//code that interacts with your user interface
/*

<form>
<input id="firstName">
<input id="lastName">
<button id="create">
</form>
*/


document.querySelector('#create').addEventListener('click', function(){
  const boxerRepo = new BoxerRepository();
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const boxer = new Boxer(firstName, lastName);
  boxerRepo.create(boxer);
})



// new Boxer(...........);
