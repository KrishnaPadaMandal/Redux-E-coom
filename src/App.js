
import Navbar from "./component/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Product from "./component/Product";
import ProductDetails from "./component/ProductDetails";
function App() {
  return (
    <div className="App">
      

      <Router>
        
             <Navbar/>
             <Routes>
              <Route path="/product" element={<Product/>}/>
             </Routes>

             <Routes>
             <Route path="/product-details/:id" element={<ProductDetails/>}/>
             </Routes>

      </Router>
    </div>
  );
}

export default App;
