export type Square = number;
export type AlgebraicSquare = string;
export type Board = Uint8Array;

export interface Move {
    from: Square;
    to: Square;
    promotion?: PieceType;
}

export const Pieces = {
    empty: 0,
    P: 1, p: 9,
    N: 2, n: 10,
    B: 3, b: 11,
    R: 4, r: 12,
    Q: 5, q: 13,
    K: 6, k: 14,
} as const;

export type PieceType = typeof Pieces[keyof typeof Pieces];

export type Color = 1 | 0;

export interface GameState {
    board: Board;
    activeColor: Color;
    castlingRights: {
        whiteKing: boolean;
        whiteQueen: boolean;
        blackKing: boolean;
        blackQueen: boolean;
    };
    enPassantSquare?: Square;
    halfMoveClock: number;
    fullMoveNumber: number;
}


export const squareToAlgebraic = (square: Square): AlgebraicSquare => `${String.fromCharCode(96 + Math.floor(square / 10))}${square % 10}`;
export const algebraicToSquare = (algebraic: AlgebraicSquare): Square => (algebraic[0].charCodeAt(0) - 96) * 10 + parseInt(algebraic[1]);
export const indexToSquare = (index: number): Square => (1 + (index % 8)) * 10 + 8 - Math.floor(index / 8);
export const squareToIndex = (square: Square): number => 8 * (8 - square % 10) + Math.floor(square / 10) - 1;
