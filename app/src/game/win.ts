export const hasPlayerWon: Function = (gameState: Array<number>, currentPlayer: number ): Boolean => {
    
    const [leftTrace, rightTrace] = calculateTrace(gameState);

    return leftTrace * currentPlayer === 3 || rightTrace * currentPlayer === 3;
}


const calculateTrace: Function = (gameState: Array<number>): Array<number> => {
    let leftTrace:number = 0;
    let rightTrace:number = 0;
    for(var x: number = 0; x < 3; x++) {
        leftTrace += gameState[x * 4]
    }

    for(var y: number = 0; y < 3; y++) {
        rightTrace += gameState[y + 2]
        console.log(gameState[y * 2 + 2])

    }
    return [leftTrace, rightTrace];
}