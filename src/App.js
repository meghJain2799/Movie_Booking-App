import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Shows from './Components/Shows';
import Screen from './Components/Screen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />

        <Route path="/screen" element={<Screen />} />
      </Routes>
    </div>
  );
}

export default App;
