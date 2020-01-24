class BoxerRepository extends BaseRepository {
  constructor() {
    this.KEY = 'boxers';
  }

  create(boxer) {
    //get collection from storage 
    const boxerStorage = this.getAll();

    //generate id and assign to id of boxer
    boxer.id = uuidv4();

    //push boxer to the collection
    boxerStorage.push(boxer);

    //save the collection
    localStorage.setItem(this.KEY, JSON.stringify(boxerStorage));

    return boxer;
  }

  getAll() {
    return JSON.parse(localStorage.getItem(this.KEY)) || [];
  }
}

