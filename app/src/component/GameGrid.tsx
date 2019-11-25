import React from "react";
import { styled } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";

interface GameGridProps {
	disabled?: Boolean;
}
const GameGrid = styled(
	({ disabled, ...other }: GameGridProps & Omit<GridProps, keyof GameGridProps>) => (
		<Grid {...other} />
	)
)({
	cursor: (props: GameGridProps) => (props.disabled ? "default" : "pointer")
});

export default GameGrid;
