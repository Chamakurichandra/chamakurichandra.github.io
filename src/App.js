import React from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from "./components/Header";
import AddToList from "./pages/AddtoList";
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<AddToList/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
