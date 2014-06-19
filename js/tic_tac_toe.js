var playerToken = 'x';

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

$('.board').on('click', ".square:not('.square-x, .square-o')", function(event) {
	var $chosenSquare = $(event.currentTarget);
	addClass($chosenSquare, playerToken);
	playerToken = assignToken(playerToken);
});
  
  
  

