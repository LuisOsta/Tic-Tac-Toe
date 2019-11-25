import React from "react";
import GameGrid from "./GameGrid";

interface GCProps {
	cell: number;
	index: number;
	handleClick: Function;
}
const GameCell: React.FC<GCProps> = ({ cell, index, handleClick }: GCProps) => {
	const onClick = (): void => {
		try {
			handleClick(cell, index);
		} catch (error) {
			console.error(`An error occured while clicking on the game cell: ${error}`);
		}
	};
	return (
		<GameGrid item xs={4} onClick={onClick} disabled={cell !== 0}>
			<h1>
				{cell}, {index}
			</h1>
		</GameGrid>
	);
};

export default GameCell;
