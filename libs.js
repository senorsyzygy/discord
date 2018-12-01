Object.defineProperty(Array.prototype, 'crandom', {
  value: function () {
    let index = Math.floor(Math.random() * this.length);
    return this[index];
  }
});