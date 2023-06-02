import Home from "./Components/Home";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/Login" exact element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
