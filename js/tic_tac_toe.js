var playerToken = 'x';

var playerSquares = {
	'x': [],
	'o': []
}  

var winningCombinations = [

  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function addClass(square, token) {
	square.addClass('square-' + token);
}

function assignToken(token) {
	if(token === 'x') {
  	return token = 'o';
  } else {
  	  return token = 'x';
    }
}

function currentIndex(square) {
	return $('.board .square').index(square);
}

function resultIsAWin(counter, player){
	if(counter >= 3) {
	  alert(player + ' wins!');
	  exit();
   } 
}

function resultIsADraw() {
  if(playerSquares['x'].length + playerSquares['o'].length === 9){
    //$(function() {
    	//$('#doge').dialog();
    //});
    alert("Doge's Game!");
  }
}

$('.board').on('click', ".square:not('.square-x, .square-o')", function(event) {

	var $chosenSquare = $(event.currentTarget);

	playerSquares[playerToken].push(currentIndex($chosenSquare));

	addClass($chosenSquare, playerToken);

	var squareCount = 0;

	for(var i = 0; i < winningCombinations.length; ++i) {

	  for(var index = 0; index < winningCombinations[i].length; index++) {

	    for(var finalIndex = 0; finalIndex < playerSquares[playerToken].length; finalIndex++){

	    	if(winningCombinations[i][index] == playerSquares[playerToken][finalIndex]) {

	    		++squareCount;
	    	}
	    }
	    	resultIsAWin(squareCount, playerToken);
	  }
			squareCount = 0;	    
	}
	playerToken = assignToken(playerToken);

	resultIsADraw();
});






	
