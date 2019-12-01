import React from "react";
import { styled } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";

interface GameGridProps {
	width?: string
}
const GameGrid = styled(
	({ ...other }: GameGridProps & Omit<GridProps, keyof GameGridProps>) => (
		<Grid container {...other} />
	)
)({
	width: (props: GameGridProps) => (props.width? props.width : '50%')
});

export default GameGrid;
