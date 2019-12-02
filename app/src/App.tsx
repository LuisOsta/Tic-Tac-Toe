import React, { useState } from "react";
import GameCell from "./component/GameCell";
import "./App.css";
import GameGrid from "./component/styled/GameGrid";

const PLAYER_O = 1; // O
const PLAYER_X = 2; // X
const initial: Array<number> = new Array<number>(9).fill(0);
const App: React.FC = () => {
	const [cells, setCells] = useState(initial);
	const [player, setPlayer] = useState(PLAYER_O)
	const handleUpdate: Function = (index: number) => {
		const newCell: number = player;
		// update the game cells
		const newCells = cells.map((value, i) => (i === index ? newCell : value));
		setCells(newCells);
		
		//update the player
		const newPlayer: number = player === PLAYER_O ? PLAYER_X : PLAYER_O;
		setPlayer(newPlayer)
	};
	return (
		<div className="App">
			<header className="App-header">
				<GameGrid>
					{cells.map((cell, index) => {
						return (
							<GameCell
								cell={cell}
								index={index}
								handleClick={handleUpdate}
								key={`${cell}-${index}`}
							/>
						);
					})}
				</GameGrid>
			</header>
		</div>
	);
};

export default App;
