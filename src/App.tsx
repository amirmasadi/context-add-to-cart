import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Cart from "./components/Cart";
import InCartContext from "./context/InCartContext";

function App() {
  return (
    <Router>
      <InCartContext>
        <Layout>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </InCartContext>
    </Router>
  );
}

export default App;
