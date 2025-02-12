const choices = ['Rock', 'Paper', 'Scissors']
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * ( 2 - 0 + 1 ) + 0 )
    return choices[randomNumber]
}

function getHumanChoice(){
    return prompt('Rock, Paper or Scissors?', '')
}

function rockPaperScissors(computerChoice, humanChoice){
    if(computerChoice == humanChoice){
        console.log(`
        Computer choice: ${computerChoice}
        Human choice: ${humanChoice}
        Draw! Replay the point.
        --------------------------
        THE SCORE:
        Computer ${computerScore} | Human ${humanScore}
        `)
        rockPaperScissors(getComputerChoice(), getHumanChoice())
    }else if(computerChoice == 'Rock' && humanChoice == 'Scissors'){
        computerScore += 1
        console.log(`
        Computer choice: ${computerChoice}
        Human choice: ${humanChoice}
        Computer wins!
        --------------------------
        THE SCORE:
        Computer ${computerScore} | Human ${humanScore}
        `)
        rockPaperScissors(getComputerChoice(), getHumanChoice())
    }else if(computerChoice == 'Scissors' && humanChoice == 'Paper'){
        computerScore += 1
        console.log(`
        Computer choice: ${computerChoice}
        Human choice: ${humanChoice}
        Computer wins!
        --------------------------
        THE SCORE:
        Computer ${computerScore} | Human ${humanScore}
        `)
        rockPaperScissors(getComputerChoice(), getHumanChoice())
    }else if(computerChoice == 'Paper' && humanChoice == 'Rock'){
        computerScore += 1
        console.log(`
        Computer choice: ${computerChoice}
        Human choice: ${humanChoice}
        Computer wins!
        --------------------------
        THE SCORE:
        Computer ${computerScore} | Human ${humanScore}
        `)
        rockPaperScissors(getComputerChoice(), getHumanChoice())
    }else{
        humanScore += 1
        console.log(`
        Computer choice: ${computerChoice}
        Human choice: ${humanChoice}
        Human wins!
        --------------------------
        THE SCORE:
        Computer ${computerScore} | Human ${humanScore}
        `)
        rockPaperScissors(getComputerChoice(), getHumanChoice())
    }
}

rockPaperScissors(getComputerChoice(), getHumanChoice())



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
 * Vérifier avec des conditions qui gagne
 * Si robot = humain, on rejoue
 * Si robot = Rock et Humain = Scissors alors robot win
 * Si robot = Scissors et Humain = Paper alors robot win
 * Si robot = Paper et Humain = Rock alors robot win
 * Sinon Humain win
 */