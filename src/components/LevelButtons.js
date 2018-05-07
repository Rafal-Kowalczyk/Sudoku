import React from "react";

import style from './LevelButtons.css';

const LevelButtons = props => (
	<div className={style.buttons}>
		<button onClick={props.setLevelEasy}>START EASY BOARD</button>
		<button onClick={props.setLevelMedium}>START MEDIUM Board</button>
		<button onClick={props.setLevelHard}>START HARD BOARD</button>
	</div>
);

export default LevelButtons;