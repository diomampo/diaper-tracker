function Diaper() {
  this.type = 1; // one of [1,2,3] aka ['pee', 'poop', 'both']
  this.disposedAt = _.now();
};