import logo from "./logo.svg";
import "./App.css";
import AddTeacher from "./screens/AddTeacher";
import Head from "./screens/Head";
import Delete from "./screens/Delete";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link style={{ textDecoration: "none" }} to="addteacher">
                  Add Teacher
                </Link>
                <br />
                <Link style={{ textDecoration: "none" }} to="head">
                  Head Dashboard
                </Link>
                <br />
                <Link style={{ textDecoration: "none" }} to="delete">
                  Delete Marks
                </Link>
              </>
            }
          />
          <Route path="/addteacher" element={<AddTeacher />} />
          <Route path="/head" element={<Head />} />
          <Route path="/delete" element={<Delete />} />

          {/* <AddTeacher /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
