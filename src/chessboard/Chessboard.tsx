import type { Board } from "./types";
import { indexToSquare } from "./types";
import PieceAreaView from "./Piece";
import "./Chessboard.css";

function BackgroundView() {
    return (
        <div className="background">
            {Array.from({ length: 64 }, (_, idx) => {
                const square = indexToSquare(idx);
                if ((Math.floor(square / 10) + square % 10) % 2) {
                    return (
                        <div key={idx} className="light-sq"></div>
                    );
                } else {
                    return (
                        <div key={idx}></div>
                    );
                }
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
