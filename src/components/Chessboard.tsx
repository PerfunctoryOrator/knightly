import type { Board } from "../utils/types.ts";
import { indexToSquare } from "../utils/types.ts";
import PieceAreaView from "./Piece.tsx";
import "../styles/Chessboard.css";

function BackgroundView() {
    return (
        <div className="background">
            {Array.from({ length: 64 }, (_, idx) => {
                const square = indexToSquare(idx);
                return (
                    <div key={idx} className={(Math.floor(square / 10) + square % 10) % 2 ? "light-sq" : ""}></div>
                );
            })}
        </div>
    );
}

function ChessboardView({ board }: {board: Board}) {
    return (
        <div className="board">
            <BackgroundView />
            <PieceAreaView board={board} />
        </div>
    );
}

export default ChessboardView;
