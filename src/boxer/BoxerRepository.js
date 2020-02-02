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
    boxerStorage.push(newBoxer)
    //save the collection
    localStorage.setItem(this.KEY, JSON.stringify(boxerStorage));
    return newBoxer;
  }

  getAll() {
    return JSON.parse(localStorage.getItem(this.KEY)) || [];
  }

  edit(indexOfBoxer) {
    let index = indexOfBoxer;
    const boxerStorage = this.getAll();
    console.log(boxerStorage[index]);

  }

  getBoxerToEdit() {
    let index;
    let boxer;
    const idSearch = location.search;
    const boxerId = idSearch.slice(4);
    for (let i = 0; i < boxerStorage.length; i++) {
      if (boxerStorage[i].id === boxerId) {
        boxer = boxerStorage[i];
        index = boxerStorage.indexOf(boxerStorage[i]);
        return index;
      }
    }

  }

  delete() {
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
    boxerStorage.splice(index, 1);

    localStorage.setItem(this.KEY, JSON.stringify(boxerStorage));
  }
}
