import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"
function App() {
  return (
    // url
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
