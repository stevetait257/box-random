class BoxerRepository extends BaseRepository {
  constructor() {
    super();
    this.KEY = 'boxers';
  }
  save(boxer) {
    
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
    location.reload();
  }

  getAll() {
    return JSON.parse(localStorage.getItem(this.KEY)) || [];
  }
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
  delete(id) {
    const boxerStorage = this.getAll();
    const boxerId = id;
    const index = this.getIndex(boxerId);
    boxerStorage.splice(index, 1);
    localStorage.setItem(this.KEY, JSON.stringify(boxerStorage));
  }
}
