const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let round = 0;
const maxRounds = 5;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice;
    while (!choices.includes(choice)) {
        choice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    }
    return choice;
}

function determineWinner(humanChoice, computerChoice) {
    const rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    };

    if (humanChoice === computerChoice) {
        return 'tie';
    }
    return rules[humanChoice] === computerChoice ? 'human' : 'computer';
}

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const winner = determineWinner(humanChoice, computerChoice);

    if (winner === 'human') {
        console.log(`${humanChoice} beats ${computerChoice}. You win!`);
        humanScore++;
    } else if (winner === 'computer') {
        console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
        computerScore++;
    } else {
        console.log("It's a tie! Play again.");
        return; // Ne compte pas ce tour et rejoue
    }

    round++;
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore} | Round: ${round}`);
}

function playGame() {
    while (round < maxRounds) {
        playRound();
    }

    console.log(`Game Over! ${humanScore > computerScore ? "You win!" : "Computer wins!"}`);
}

playGame();






/**
 * Computer logic
 * Stocker les 3 valeurs dans un array
 * Créer une fonction 
 * Générer un un nombre aléatoire entre 0 et 2
 * Assigner ce nombre à un numéro du tableau 
 * Imprimer l'index du tableau associée à ce chiffre
 * Créer une fonction pour récupérer le choix humain
 * Dans la fonction , faire prompt pour récupérer ce choix
 * Faire une fonction qui a pour paramètres les deux fonctions 
 * Vérifier avec des conditions qui gagne le round
 * Si l'humain n'entre rien, alors on repose la question
 * Si robot = humain, on rejoue
 * Si robot = Rock et Humain = Scissors alors robot win
 * Si robot = Scissors et Humain = Paper alors robot win
 * Si robot = Paper et Humain = Rock alors robot win
 * Sinon Humain win
 * 
 * Si 
 */