const restart = document.querySelector('.submit');
const restart2 = document.querySelector('.submit2');
const result = document.getElementById('result');
const twoPlayer = document.getElementById('twoplayer');
const onePlayer = document.getElementById('oneplayer');
const player_Ai = document.getElementById('player-ai');
const player_player = document.getElementById('player-player');
const buttons = document.querySelector('.buttons');
const score2player = document.getElementById('score');
const resultBoard1 = document.getElementById('result1');
const resultBoard2 = document.getElementById('result2');
const report1 = document.getElementById('report1');
const report2 = document.getElementById('report2');
onePlayer.addEventListener('click',() =>{
	onePlayer.style.display = "none";
	twoPlayer.style.display = "none";
	buttons.style.display = "none";
	player_Ai.style.display = "block";
	restart.addEventListener('click',()=>{
		restart.innerText = 'PLAY AGAIN';
		result.innerText = 'DRAW';
		game1player();
		restart.addEventListener('click', () => {
			window.location.reload();
		})
	})
})

twoPlayer.addEventListener('click',() =>{
	player_player.style.display = "flex";
	player_player.style.justifyContent = "space-around";
	player_player.style.gap = "100px";
	restart2.style.display = "block";
	resultBoard1.style.display = "inline";
	resultBoard2.style.display = "inline";
	report1.style.display = "inline";
	report2.style.display = "inline";
	score2player.style.display = "block";
	onePlayer.style.display = "none";
	twoPlayer.style.display = "none";
	buttons.style.display = "none";
	restart2.addEventListener('click',()=>{
		restart2.innerText = 'PLAY AGAIN';
		playerAction();
		restart2.addEventListener('click', () => {
			window.location.reload();
		})
	})
})

const game1player = () =>{
    let copmuter_score = 0;
    let user_score = 0;
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissor = document.querySelector('.scissor');
    const user_action = [rock, paper, scissor];
    const computer_action = ['rock', 'paper', 'scissors'];
    const playGame = () =>{
        user_action.forEach(action => {
			action.addEventListener('click', () => {
				const actionList = action.classList;
				const actionClassName = actionList[0];
				const num = Math.floor(Math.random()*3);
				const computer_choice = computer_action[num];
				winner(actionClassName, computer_choice)
			})
		})
    }

	const winner = (user, computer) => {
		const playerScoreBoard = document.querySelector('.user-score');
		const computerScoreBoard = document.querySelector('.computer-score');
        const report = document.querySelector('.report');


		if (user == 'rock') {
			if (computer == 'paper') {
				result.innerText = 'You Lost!';
				result.style.color = "red";
                report.textContent = 'computer choosed paper'
				copmuter_score++;
				computerScoreBoard.textContent = copmuter_score.toString();

			} else {
				result.innerText = 'You Won!'
				result.style.color = "green";
                report.textContent = 'computer choosed scissor'
				user_score++;
				playerScoreBoard.textContent = user_score.toString();
			}
		}
		else if (user == 'scissor') {
			if (computer == 'rock') {
				result.innerText = 'You Lost!';
				result.style.color = "red";
                report.textContent = 'computer choosed rock'
				copmuter_score++;
				computerScoreBoard.textContent = copmuter_score.toString();
			} else {
				result.innerText = 'You Won!';
				result.style.color = "green";
                report.textContent = 'computer choosed paper'
				user_score++;
				playerScoreBoard.textContent = user_score.toString();
			}
		}
		else if (user == 'paper') {
			if (computer == 'scissors') {
				result.innerText = 'You Lost!';
				result.style.color = "red";
                report.textContent = 'computer choosed scissor'
				copmuter_score++;
				computerScoreBoard.textContent = copmuter_score.toString();
			} else {
				result.innerText = 'You Won!';
				result.style.color = "green";
                report.textContent = 'computer choosed rock'
				user_score++;
				playerScoreBoard.textContent = user_score.toString();
			}
		}
	}
	playGame();   
}



let player1Action, player2Action;
let player1Score = 0;
let player2Score = 0;

function playerAction(player1Action, player2Action) {
    if (player1Action && player2Action) {
		console.log(player1Action);
	    console.log(player2Action);
        determineWinner();
    }
}
function determineWinner() {
	const user1score = document.querySelector('.user1-score');
    const user2score = document.querySelector('.user2-score');
	const resul1player = document.getElementById('result1');
	const resul2player = document.getElementById('result2');
    if (
        (player1Action === 'rock' && player2Action === 'scissors') ||
        (player1Action === 'paper' && player2Action === 'rock') ||
        (player1Action === 'scissors' && player2Action === 'paper')
    ) {
		resul1player.innerText = 'You Won!';
		resul2player.innerText = 'You Lost!';
		resul1player.style.color = "green";
		resul2player.style.color = "red";
		report1.innerText = "choose "+player1Action;
		report2.innerText = "choose "+player2Action;
        player1Score++;
        user1score.textContent = player1Score.toString();
    } else if (
        (player2Action === 'rock' && player1Action === 'scissors') ||
        (player2Action === 'paper' && player1Action === 'rock') ||
        (player2Action === 'scissors' && player1Action === 'paper')
    ) {
		resul2player.innerText = 'You Won!';
		resul1player.innerText = 'You Lost!';
		resul2player.style.color = "green";
		resul1player.style.color = "red";
		report1.innerText = "choose "+player1Action;
		report2.innerText = "choose "+player2Action;
        player2Score++;
        user2score.textContent = player2Score.toString();
    } 
    player1Action = null;
    player2Action = null;
}

document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (key === 'a') {
        player1Action = 'rock';
    } else if (key === 's') {
        player1Action = 'paper';
    } else if (key === 'd') {
        player1Action = 'scissors';
    }
    playerAction(player1Action, player2Action);
});

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === 'ArrowLeft') {
        player2Action = 'rock';
    } else if (key === 'ArrowUp') {
        player2Action = 'paper';
    } else if (key === 'ArrowRight') {
        player2Action = 'scissors';
    }
    playerAction(player1Action, player2Action);
});




