module.exports = {
  getColor: function(type) {
    if (type == 'ocean') {
      return '#2467c5';
    } else if (type == 'matador') {
      return 'green';
    } else if (type == 'snow') {
      return 'white';
    } else {
      return 'black';
    }
  }
}