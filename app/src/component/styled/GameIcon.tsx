import React from 'react'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
    icon: {
        padding: '50px',
        fontSize: '2em',
    }
})
interface GIProps {
    cell: number,
}
const GameIcon: React.FC<GIProps> = ({ cell }: GIProps) => {
    const classes = useStyles()
    const letter: string = cell === 0 ? "_" : cell === 1 ? "O" : "X";
    return (
        <span className={classes.icon}>{letter}</span>
    )
}


export default GameIcon