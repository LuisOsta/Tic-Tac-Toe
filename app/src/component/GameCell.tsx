import React from "react";
import GameCellGrid from "./styled/GameCellGrid";
import GameIcon from "./styled/GameIcon";

interface GCProps {
	cell: number;
	index: number;
	handleClick: Function;
}
const GameCell: React.FC<GCProps> = ({ cell, index, handleClick }: GCProps) => {
	const onClick = (): void => {
		try {
			if(cell !== 0) {
				return;
			}
			handleClick(index);
		} catch (error) {
			console.error(`An error occured while clicking on the game cell: ${error}`);
		}
	};
	return (
		<GameCellGrid container item xs={4} onClick={onClick} disabled={cell !== 0} position={index} direction="column">
			<GameIcon cell={cell} />
		</GameCellGrid>
	);
};



export default GameCell;
