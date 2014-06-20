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

$('.board').on('click', ".square:not('.square-x, .square-o')", function(event) {

	var $chosenSquare = $(event.currentTarget);

	playerSquares[playerToken].push(currentIndex($chosenSquare));

	//console.log(playerSquares[playerToken]);

	addClass($chosenSquare, playerToken);

	var squareCount = 0;
	for(var i = 0; i < winningCombinations.length; ++i) {

	  for(var index = 0; index < winningCombinations[i].length; index++) {

	    for(var finalIndex = 0; finalIndex < playerSquares[playerToken].length; finalIndex++){

	    	if(winningCombinations[i][index] == playerSquares[playerToken][finalIndex]) {

	    		++squareCount;
	    		console.log(squareCount);
	    	}
	    		if(squareCount >= 3) {
	          return alert(playerToken + ' wins!');
          } 

	    	}

	    }
			squareCount = 0;	    
	  }

	playerToken = assignToken(playerToken);

});

//At the end of each click event, check if the current player has every index from any of the winning combinations
	
