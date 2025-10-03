import NavigationBar from "./components/Navigation";

import Chessboard from "./chessboard/chess";
import ChessboardView from "./chessboard/Chessboard";
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
