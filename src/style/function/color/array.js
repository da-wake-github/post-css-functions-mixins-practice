module.exports = {
  getColor: function(type) {
    const colorCode = [{
      name: 'ocean',
      code: '#2467c5'
    },
    {
      name: 'matador',
      code: 'green'
    },
    {
      name: 'snow',
      code: 'white'
    },{
        name: undefined,
        code: 'black'
    }]
    .filter((data) => type === data.name)[0]?.code;
    // return undefined === colorCode ? black : colorCode;
    return colorCode;
  }
}