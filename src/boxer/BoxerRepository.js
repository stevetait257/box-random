class BoxerRepository extends BaseRepository {
  constructor() {
    super();
    this.KEY = 'boxers';
  }
  // combine create and save 
  save(boxer) {
    // debugger;
    const boxerStorage = this.getAll();
    const boxerToSave = boxer;
    if (!boxerToSave.id) {
      boxerToSave.id = this.uuidv4();
      boxerStorage.push(boxerToSave);
      localStorage.setItem(this.KEY, JSON.stringify(boxerStorage));
      return boxerToSave;
    } else {
      const boxerIndex = this.getIndex(boxerToSave.id);
      boxerStorage[boxerIndex] = boxer;
      localStorage.setItem(this.KEY, JSON.stringify(boxerStorage));
      return boxerToSave;
    }
    // location.reload();

  }

  getAll() {
    return JSON.parse(localStorage.getItem(this.KEY)) || [];
  }

  // refactor to remove the index
  getById(id) {
    const boxerStorage = this.getAll();
    let boxer;
    const boxerId = id;
    for (let i = 0; i < boxerStorage.length; i++) {
      if (boxerStorage[i].id === boxerId) {
        boxer = boxerStorage[i];
        return boxer;
      }
    }
  }

  getIndex(id) {
    const boxerStorage = this.getAll();
    const boxerId = id;
    let boxer, boxerIndex;

    for (let i = 0; i < boxerStorage.length; i++) {
      if (boxerStorage[i].id === boxerId) {
        boxer = boxerStorage[i];
        boxerIndex = boxerStorage.indexOf(boxer);
        return boxerIndex;
      }
    }
  }

  delete(e) {
    console.log(this);
    const boxerStorage = this.getAll();
    const idSearch = location.search;
    boxerId = idSearch.slice(4);
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
