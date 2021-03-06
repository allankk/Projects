import Ship from './Ship';

const BOARD_SIZE = 10; // CHANGE THE AMOUNT OF ROWS/COLUMNS IN GRID

// creates a new board (grid size x size)
function createBoard(size) {
    let board = [];

    for (let i = 0; i < size; i++) {
        let row = [];

        for (let j = 0; j < size; j++) {
            row.push(0);
        }

        board.push(row);
    }
    return board;
};

const Gameboard = () => {
    const board = createBoard(BOARD_SIZE);
    let shipsArr = [];

    // creates ship coordinates
    function createShipArray(length, coords, isVertical) {
        let coordArr = [];

        coordArr.push([coords[0], coords[1]]);

        for(let i = 1; i < length; i++) {
            if (isVertical) {
                coordArr.push([coords[0] - i, coords[1]]);
            } else {
                coordArr.push([coords[0], coords[1] - i]);
            }
        };
        return coordArr;
    };

    // place 'x' in the array around the ship to mark where other ships can't be placed
    const placeDisabledSpots = (coords) => {
        let row = coords[0];
        let col = coords[1];

        // check if the squares around each ship part are empty            
        for(let j = -1; j < 2; j++) {
            for(let k = -1; k < 2; k++) {
                let curRow = row + j;
                let curCol = col + k;

                // don't check outside the board
                if (curRow > BOARD_SIZE-1 || curRow < 0) continue;
                if (curCol > BOARD_SIZE-1 || curCol < 0) continue;

                if (board[curRow][curCol] === 0) {
                    board[curRow][curCol] = 'x';
                }
            }
        }
    };

    const placeShip = (length, coords, isVertical, name) => {

        let shipCoords = createShipArray(length, coords, isVertical);

        // first check if the ship can be placed in the coordinates
        if (checkIfValid(shipCoords)) {
            let newShip = Ship(length, shipCoords, name);
            shipsArr.push(newShip);

            // for each coordinate, place the newShip object into the array.
            shipCoords.forEach(element => {
                placeDisabledSpots(element);
                board[element[0]][element[1]] = newShip;
            })
            return true;
        } else {
            return false;
        }
    };

    // check if position to place ship is valid. Input is an array of coordinates (eg [[1, 2][1, 3][1, 4]])
    const checkIfValid = (shipArray) => {
        for (let i = 0; i < shipArray.length; i++) {
            let row = shipArray[i][0];
            let col = shipArray[i][1];

            // check if ship is placed outside of board
            if (row < 0 || row > BOARD_SIZE-1) return false;
            if (col < 0 || col > BOARD_SIZE-1) return false;

            // check if the ship part coordinate is placed on an empty tile
            if (board[row][col] !== 0) {
                return false;
            };
        }
        return true;
    };

    // receive an attack on a tile. if the tile is an object (ship), use the hit function in ship object. 
    // Otherwise, write a 1 to the gameboard.
    const receiveAttack = (coords) => {
        let tile = board[coords[0]][coords[1]];

        if (typeof(tile) === 'object') {
            tile.hit([coords[0], coords[1]]);
            if (tile.isSunk()) {
                console.log('just sunk a ship');
            }
        } else if (tile === 0 || tile === 'x') {
            board[coords[0]][coords[1]] = 1;
        }
    }

    const areAllSunk = () => {
        for(let i = 0; i < shipsArr.length; i++) {
            if (!shipsArr[i].isSunk()) return false;
        }
        return true;
    }

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = 0;
            }
        }

        shipsArr = [];
    }

    function getBoard() { return board };
    function getShips() { return shipsArr }

    return {
        placeShip,
        getBoard,
        checkIfValid,
        receiveAttack,
        areAllSunk,
        createShipArray,
        resetBoard,
        getShips
    }
}

export default Gameboard;