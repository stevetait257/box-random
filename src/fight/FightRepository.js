class FightRepository extends BaseRepository {

  constructor() {
    super();
    this.KEY = 'fights';
  }

  getAllFights() {
    return JSON.parse(localStorage.getItem(this.KEY)) || [];
  }

  save(fight) {
    const fightStorage = this.getAllFights();
    const fightToSave = fight;
    fightToSave.id = this.uuidv4();
    fightStorage.push(fightToSave);
    localStorage.setItem(this.KEY, JSON.stringify(fightStorage));

  }
}


/*

saveFight(){

}

getFightsByBoxer(){
  
}

*/
