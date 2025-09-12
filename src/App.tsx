import Chessboard from "./utils/chess.ts";
import ChessboardView from "./components/Chessboard.tsx";
import "./App.css";

function App() {
    const board = new Chessboard();
    board.setDefaultPosition();

    return (
        <>
            <h2>Chess Board</h2>
            <ChessboardView board={board["position"]} />
        </>
    );
}

export default App;
