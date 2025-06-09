import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import Payments from "./Pages/Payments";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/SignUp";

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <Navbar />
        <div className="py-8">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
