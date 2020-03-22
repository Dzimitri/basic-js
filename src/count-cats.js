module.exports = function countCats(matrix) {
  var sum = 0;
  var mCol = [];
  for (var i = 0; i < matrix.length; i++){
    mCol = matrix[i];
    for ( var j = 0; j < mCol.length; j++){
      if( mCol[j] != "^^") continue;
      sum++;
  }
} return sum;

};
