class BoxerRepository extends BaseRepository {
  constructor() {
    super();
    this.KEY = 'boxers';
  }
// combine create and save 
  create(newBoxer) {
    const boxerStorage = this.getAll();
    newBoxer.id = this.uuidv4();
    boxerStorage.push(newBoxer)
    localStorage.setItem(this.KEY, JSON.stringify(boxerStorage));
    return newBoxer;
  }

  save(boxer, boxerIndex) {
    const boxerStorage = this.getAll();
    boxerStorage[boxerIndex] = boxer;
    localStorage.setItem(this.KEY, JSON.stringify(boxerStorage));
  }

  getAll() {
    return JSON.parse(localStorage.getItem(this.KEY)) || [];
  }

// refactor to remove the index
  getById(boxerId) {
    const boxerStorage = this.getAll();
    let index;
    let boxer;
    boxerId = boxerId;
    for (let i = 0; i < boxerStorage.length; i++) {
      if (boxerStorage[i].id === boxerId) {
        boxer = boxerStorage[i];
        index = boxerStorage.indexOf(boxerStorage[i]);
        return [boxer, index];
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
