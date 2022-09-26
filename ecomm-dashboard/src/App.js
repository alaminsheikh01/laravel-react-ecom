import { Button } from "react-bootstrap";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import AddProduct from "./component/AddProduct";
import UpdateProduct from "./component/UpdateProduct";
import Protected from "./component/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />

          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
