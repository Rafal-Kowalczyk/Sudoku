import React from "react";
import sudoku from "sudoku-umd";
import Board from "../components/Board.js";
import LevelButtons from "../components/LevelButtons.js";

import style from './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialBoard: "",
			board: ""

		};
    	this.handleSolve = this.handleSolve.bind(this);
    	this.handleRestart = this.handleRestart.bind(this);
    	this.handleCheck = this.handleCheck.bind(this);
    	this.updateBoard = this.updateBoard.bind(this);		
    	this.setLevelEasy = this.setLevelEasy.bind(this);
    	this.setLevelMedium = this.setLevelMedium.bind(this);
    	this.setLevelHard = this.setLevelHard.bind(this);
	}

	setLevelEasy() {
		const easy = sudoku.generate("easy");
    	this.setState({
      		initialBoard: easy,
      		board: easy
    	});		
	}

	setLevelMedium() {
		const medium = sudoku.generate("medium");
    	this.setState({
      		initialBoard: medium,
      		board: medium
    	});	
	}

	setLevelHard() {
		const hard = sudoku.generate("hard");
    	this.setState({
      		initialBoard: hard,
      		board: hard
    	});	
	}

	handleSolve(e) {
  	const solve = sudoku.solve(this.state.board);
  	if (solve === false) {
    		alert ('press restart to start again');
  	} else {
    		this.setState({
      	board: solve
    		});
  	}
	}

	handleRestart(e) {
  	const restart = this.state.initialBoard;
  	this.setState({
    		board: restart
  	});
	}

	handleCheck(e) {
  	const solve = sudoku.solve(this.state.board);
  	const myBoard = this.state.board;
  	if (myBoard  === solve) {
  		alert("good solution"); 
  	} else {
  		alert("wrong solution");
  	}

	}

	updateBoard(id, tile) {
  	const updatedBoard = this.state.board.split('');
  	const checkTile = (tile !== '') ? tile : '.'; 
  	updatedBoard.splice(id, 1, checkTile);
  	const newBoard = updatedBoard.join('');
  		this.setState({
   	 	board: newBoard
  	});
	}

	render() {
		return (
			<div className={style.container}>
				<h1>Sudoku</h1>
				<LevelButtons
					setLevelEasy={this.setLevelEasy.bind(this)}
					setLevelMedium={this.setLevelMedium.bind(this)}
					setLevelHard={this.setLevelHard.bind(this)}
				/>
   			<div className={style.buttonGame}>
      		<button onClick={this.handleCheck}>Check</button>
      		<button onClick={this.handleSolve}>Solve</button>
      		<button onClick={this.handleRestart}>Restart</button>
			  </div>
        <Board 
          board={this.state.board}
       		initialBoard={this.state.initialBoard}
       		updateBoard={this.updateBoard}
       	/>
      </div>		   
		);
	}
}

export default App;