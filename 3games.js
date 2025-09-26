// Get player's move from command line arguments
const playerMove = process.argv[2];

// Valid moves
const validMoves = ['rock', 'paper', 'scissors'];

// Check if player provided a valid move
if (!playerMove) {
    console.log('Please provide your move: rock, paper, or scissors');
    console.log('Example: node rockPaperScissors.js rock');
    process.exit(1);
}

// Convert to lowercase for case-insensitive comparison
const normalizedPlayerMove = playerMove.toLowerCase();

if (!validMoves.includes(normalizedPlayerMove)) {
    console.log('Invalid move! Please choose: rock, paper, or scissors');
    process.exit(1);
}

// Generate random computer move
const computerMove = validMoves[Math.floor(Math.random() * validMoves.length)];

// Determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    
    // Player wins scenarios
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    
    // Otherwise computer wins
    return 'lose';
}

// Get the result
const result = determineWinner(normalizedPlayerMove, computerMove);

// Output the result
let message = `You chose ${normalizedPlayerMove}. Computer chose ${computerMove}.`;

switch (result) {
    case 'win':
        message += ' You win!';
        break;
    case 'lose':
        message += ' You lose!';
        break;
    case 'draw':
        message += ' It\'s a draw!';
        break;
}

console.log(message);
