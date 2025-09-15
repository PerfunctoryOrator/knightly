import Chessboard from "./utils/chess.ts";
import NavigationBar from "./components/Navigation.tsx";
import ChessboardView from "./components/Chessboard.tsx";
import "./App.css";

function App() {
    const board = new Chessboard();
    board.setDefaultPosition();

    return (
        <>
            <NavigationBar />
            <ChessboardView board={board["position"]} />
            <button>Flip Board</button>
            <button>Second button</button>
        </>
    );
}

export default App;
