const Park = function(name, ticket, dinosaurs = []){
  this.name = name;
  this.ticket = ticket;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDino = function (dinosaur_name){
  this.dinosaurs.push(dinosaur_name);
};

Park.prototype.removeDino = function(){
  this.dinosaurs.pop();
};

Park.prototype.mostFamousDino = function(){
  var famousDino = this.dinosaurs.reduce(function (prev, current) {
     if (prev.guestsAttractedPerDay > current.guestsAttractedPerDay){
       return prev;
     } else {
       return current
     }
  });
  return famousDino
  }

Park.prototype.findBySpecies = function (species) {
  let dinosaurWithCertainSpecies = []
    for (let dinosaur of this.dinosaurs){
      if (dinosaur.species === species){
        dinosaurWithCertainSpecies.push(dinosaur);
      }
    }
  return dinosaurWithCertainSpecies;
};


Park.prototype.totalVisitors = function () {
  let totalVisitor = 0
    for (let dinosaur of this.dinosaurs){
      totalVisitor += dinosaur.guestsAttractedPerDay;
    }
  return totalVisitor;
};


Park.prototype.totalVisitorsByYear = function () {
  let visitorsByDay = this.totalVisitors();
  return visitorsByDay * 365;
};


Park.prototype.revenueByYear = function () {
  let visitorsByYear = this.totalVisitorsByYear();
  return visitorsByYear * this.ticket;
};

Park.prototype.deleteBySpecies = function (species) {
    for( let i = 0; i < this.dinosaurs.length; i++){
      if ( this.dinosaurs[i].species === species) {
         this.dinosaurs.splice(i, 1)
         i--;
        }
       }
};

Park.prototype.countByDiets = function () {
  const diets = this.dinosaurs.map(dino => dino.diet)
  let counts = {};
  diets.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
  return counts
};



  module.exports = Park;
