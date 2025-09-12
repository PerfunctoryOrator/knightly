import type { Square, Board, PieceType } from "../utils/types.ts";
import { Pieces, indexToSquare } from "../utils/types.ts";
import "../assets/staunty.css";

const pieceToClass = {
    [Pieces.empty]: "",
    [Pieces.P]: "P", [Pieces.p]: "p",
    [Pieces.N]: "N", [Pieces.n]: "n",
    [Pieces.B]: "B", [Pieces.b]: "b",
    [Pieces.R]: "R", [Pieces.r]: "r",
    [Pieces.Q]: "Q", [Pieces.q]: "q",
    [Pieces.K]: "K", [Pieces.k]: "k",
};

function PieceView({ type, square }: { type: PieceType, square: Square }) {
    return (
        <div className={"piece " + pieceToClass[type]} style={{
            transform: `translate(${(Math.floor(square / 10) - 1) * 80 }px, ${(8 - (square % 10)) * 80}px)`,
        }}></div>
    );
}

function PieceAreaView({ board }: { board: Board }) {
    return (
        <>
            {Array.from(board, (piece, idx) => {
                if (piece === 0) return null;
                return (
                    <PieceView key={idx} type={piece as PieceType} square={indexToSquare(idx)} />
                );
            })}
        </>
    );
}

export default PieceAreaView;
