module.exports = {
  rem: function(px, baseFontSize = 10, ratio = 2) {
    return `${px / baseFontSize / ratio}rem`;
  }
}