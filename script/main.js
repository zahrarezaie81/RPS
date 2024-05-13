const restart = document.querySelector('.submit');
const result = document.getElementById('result');
const twoPlayer = document.getElementById('twoplayer');
const onePlayer = document.getElementById('oneplayer');
const player_Ai = document.getElementById('player-ai');
const buttons = document.querySelector('.buttons');

onePlayer.addEventListener('click',() =>{
	onePlayer.style.display = "none";
	twoPlayer.style.display = "none";
	buttons.style.display = "none";
	player_Ai.style.display = "block";
	restart.addEventListener('click',()=>{
		restart.innerText = 'PLAY AGAIN';
		result.innerText = 'DRAW';
		game();
		restart.addEventListener('click', () => {
			window.location.reload();
		})
	})
})

twoPlayer.addEventListener('click',() =>{
	buttons.style.display = "none";
	player_Ai.style.display = "block";
	restart.addEventListener('click',()=>{
		restart.innerText = 'PLAY AGAIN';
		result.innerText = 'DRAW';
		game();
		restart.addEventListener('click', () => {
			window.location.reload();
		})
	})
})

const game = () =>{
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


