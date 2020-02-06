import React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import { styled } from "@material-ui/styles";


interface TTProps {
    player: number
}
const TurnTracker: React.FC<TTProps> = ({ player }: TTProps) => {
    const currentPlayer: string = player === 1 ? "O" : "X";
    return (
        <>
            <Grid container justify="center" spacing={2}>
                <TrackerItem currentPlayer={currentPlayer} comparison={"O"}></TrackerItem>
                <TrackerItem currentPlayer={currentPlayer} comparison={"X"}></TrackerItem>
            </Grid>
        </>
    );
};

interface TIProps {
    currentPlayer: string,
    comparison: string
}
const TrackerItem = styled(
    ({ currentPlayer, comparison, ...other }: TIProps & Omit<GridProps, keyof TIProps>) => (
        <Grid item {...other}>
            <h2>Player ({comparison})</h2>
        </Grid>
    )   
)({
    color: (props: TIProps) => (props.currentPlayer === props.comparison ? "lightcoral" : "lightgray"),
});

export default TurnTracker;
