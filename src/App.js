import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Create from "./crud/Create";
import Read from "./crud/Read";
import Update from "./crud/Update";
function App(){
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="create" element={<Create />} />
          <Route path="update" element={<Update />} />
        </Routes>
      </Router>
    </div>

  )
}
export default App;
