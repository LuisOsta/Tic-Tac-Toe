import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import GameCell from "./component/GameCell";
import "./App.css";

const initial: Array<number> = new Array<number>(9).fill(0);
const App: React.FC = () => {
	const [cells, setCells] = useState(initial);

	const handleUpdate: Function = (cell: number, index: number) => {
		const newCells = cells.map((value, i) => (i === index ? 1 : value));
		setCells(newCells);
	};
	return (
		<div className="App">
			<header className="App-header">
				<Grid container>
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
				</Grid>
			</header>
		</div>
	);
};

export default App;
