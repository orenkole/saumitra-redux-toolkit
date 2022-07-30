import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import CreatePost from "./UserPost/CreatePost";
import Home from "./UserPost";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
