import React from "react";
import GameCellGrid from "./styled/GameCellGrid";

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
		<GameCellGrid item xs={4} onClick={onClick} disabled={cell !== 0} position={index}>
			<h1>
				{cell}, {index}
			</h1>
		</GameCellGrid>
	);
};

export default GameCell;
