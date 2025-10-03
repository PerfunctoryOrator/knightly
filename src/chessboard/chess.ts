import type { Board, Move, PieceType } from "./types";
import { Pieces } from "./types";

class Chessboard {
    position: Board;
    moveHistory: [Move] | [];

    constructor() {
        this.position = new Uint8Array(64);
        this.moveHistory = [];
    }

    isValidBoard(board: Board): boolean {
        if (board.length !== 64) return false;
        const validPieces = new Set(Object.values(Pieces));
        return board.every(piece => validPieces.has(piece as PieceType));
    }

    setPosition(newPosition: Board | number[]) {
        const array = newPosition instanceof Uint8Array ? newPosition : new Uint8Array(newPosition);
        if (this.isValidBoard(array)) this.position = array;
    }

    setDefaultPosition() {
        this.setPosition([
            Pieces.r, Pieces.n, Pieces.b, Pieces.q, Pieces.k, Pieces.b, Pieces.n, Pieces.r,
            Pieces.p, Pieces.p, Pieces.p, Pieces.p, Pieces.p, Pieces.p, Pieces.p, Pieces.p,
            Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty,
            Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty,
            Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty,
            Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty, Pieces.empty,
            Pieces.P, Pieces.P, Pieces.P, Pieces.P, Pieces.P, Pieces.P, Pieces.P, Pieces.P,
            Pieces.R, Pieces.N, Pieces.B, Pieces.Q, Pieces.K, Pieces.B, Pieces.N, Pieces.R,
        ]);
    }

    fen() {
        return "Not yet implemented.";
    }

    pgn() {
        return "Not yet implemented.";
    }
}

export default Chessboard;
