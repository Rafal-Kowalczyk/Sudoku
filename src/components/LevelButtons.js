import React from "react";

import style from './LevelButtons.css';

const LevelButtons = props => (
	<div className={style.buttons}>
		<button onClick={props.setLevelEasy}>START LEVEL EASY</button>
		<button onClick={props.setLevelMedium}>START LEVEL MEDIUM</button>
		<button onClick={props.setLevelHard}>START LEVEL HARD</button>
	</div>
);

export default LevelButtons;