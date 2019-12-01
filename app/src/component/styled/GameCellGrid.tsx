import React from "react";
import { styled } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";

interface GameCellGridProps {
	disabled?: Boolean;
	position: number
}
const GameCellGrid = styled(
	({ disabled, ...other }: GameCellGridProps & Omit<GridProps, keyof GameCellGridProps>) => (
		<Grid {...other} />
	)
)({
	cursor: (props: GameCellGridProps) => (props.disabled ? "default" : "pointer"),
	borderTop: (props: GameCellGridProps) => (props.position > 2 ? "1px solid": ""),
	borderRight: (props: GameCellGridProps) => (props.position % 3 == 0? "1px solid": ""),
	borderLeft: (props: GameCellGridProps) => (props.position % 3 == 2? "1px solid": "")

});

export default GameCellGrid;
