export const hasPlayerWon: Function = (gameState: Array<number>, currentPlayer: number, cellIndex: number): Boolean => {

    const [leftTrace, rightTrace] = calculateTrace(gameState);
    const rowSum = calculateRow(gameState, cellIndex);
    const columnSum = calculateColumn(gameState, cellIndex)
    return (leftTrace * currentPlayer) === 3 || (rightTrace * currentPlayer) === 3 || rowSum * currentPlayer === 3 || columnSum * currentPlayer === 3;
}


const calculateTrace: Function = (gameState: Array<number>): Array<number> => {
    let leftTrace: number = 0;
    let rightTrace: number = 0;
    for (var x: number = 0; x < 3; x++) {
        leftTrace += gameState[x * 4]
    }

    for (var y: number = 0; y < 3; y++) {
        rightTrace += gameState[y * 2 + 2]

    }
    return [leftTrace, rightTrace];
}

const calculateRow: Function = (gameState: Array<number>, cellIndex: number): number => {
    const cellOffset: number = cellIndex % 3;
    const rowStart = cellIndex - cellOffset;
    let rowSum: number = 0;
    for (var x: number = rowStart; x < rowStart + 3; x++) {
        rowSum += gameState[x];
    }

    return rowSum;
}

const calculateColumn: Function = (gameState: Array<number>, cellIndex: number): number => {
    const columnStart = cellIndex % 3
    let columnSum: number = 0

    for (var x: number = 0; x < 3; x++) {
        columnSum += gameState[3 * x + columnStart]
    }

    return columnSum;
}