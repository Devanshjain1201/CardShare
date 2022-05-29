import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Private from "./Components/Private";
import Cards from "./Components/Cards";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Private element={<Cards/>}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
