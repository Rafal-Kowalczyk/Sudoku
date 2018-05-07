import React from 'react';
import Tile from './Tile';

import style from './Board.css';

class Board extends React.Component {
  	constructor(props) {
    	super(props);
    	this.updateBoard = props.updateBoard.bind(this);
  	}
  
  	render() {
    const arrBoard = this.props.board.split('');
	    return (
	      	<div className={style.board}>
	      	{arrBoard.map((tile, index) => <Tile 
	          	key={index} 
	          	id={index} 
	          	tile={tile} 
	          	updateBoard={this.updateBoard}/>)}
	      	</div>
	    );
  	}
}

export default Board;