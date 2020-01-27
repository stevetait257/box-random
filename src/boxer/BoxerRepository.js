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
    debugger;
    const boxerStorage = this.getAll();
    const idSearch = location.search;
    const boxerId = idSearch.slice(4);
    console.log(boxerId);
    // boxerStorage.find(boxerId);
    boxerStorage.find(function (obj) {
      return obj.id === boxerId
    })[0]

  }

  displayBoxers() {

  }



}
