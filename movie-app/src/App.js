import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function App() {
  return (
    <div className="App">
      <h2>Redux toolkit with saga</h2>
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Home />} />
          <Route to="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
