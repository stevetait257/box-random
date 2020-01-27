class BoxerRepository extends BaseRepository {
  constructor() {
    super();
    this.KEY = 'boxers';
  }



  create(newBoxer) {
    //get collection from storage 
    const boxerStorage = this.getAll();
    // newBoxer = new Boxer();
    //generate id and assign to id of boxer
    newBoxer.id = this.uuidv4();

    //push boxer to the collection
    boxerStorage.push(newBoxer);

    //save the collection
    localStorage.setItem(this.KEY, JSON.stringify(boxerStorage));

    return newBoxer;
  }

  getAll() {
    return JSON.parse(localStorage.getItem(this.KEY)) || [];
  }

  editBoxer() {
    let index;
    let boxer;
    const idSearch = location.search;
    const boxerId = idSearch.slice(4);
    for (let i = 0; i < boxerStorage.length; i++) {
      if (boxerStorage[i].id === boxerId) {
        boxer = boxerStorage[i];
        index = boxerStorage.indexOf(boxerStorage[i]);
      }
    }
    document.getElementById('#firstName').textContent = boxer.firstName;
    document.getElementById('#lastName').textContent = boxer.lastName;
    document.getElementById('#nationality').textContent = boxer.nationality;
    document.getElementById('#weightClass').textContent = boxer.weightClass;
  }

  displayBoxers() {

  }



  deleteBoxer() {}


}
