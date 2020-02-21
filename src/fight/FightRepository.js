class FightRepository extends BaseRepository {

  constructor() {
    super();
    this.KEY = 'fights';

  }


  getAll() {
    return JSON.parse(localStorage.getItem(this.KEY)) || [];
  }
}


/*

saveFight(){

}

getFightsByBoxer(){
  
}

*/
