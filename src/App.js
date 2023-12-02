import {  useState } from "react"
import {Routes,Route,Link} from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import ShopCart from "./components/shopCart/shopCart";
import "./App.css";
import Footer from "./components/footer/footer.js";


const getData = async ()=>{
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json();
  return data;
 }
const products = await getData();

export default function App() {
   const [fullData, setFullData] = useState(products);
   const [selectedProducts, setSelectedProducts] = useState([]);
   let filteredSelectedProducts = [...new Set(selectedProducts)];

  return (
    <div className="App">
        <nav className="navBar">
                 <Link to="/">HomePage</Link>
                 <Link to="/shop-cart">ShopCart</Link>
        </nav>
        <Routes>
            <Route path="/" 
            element={
            <HomePage 
            fullProducts = {fullData}
            selected = {selectedProducts}
            setSelected = {setSelectedProducts}
            />
            }/>
            <Route path="/shop-cart" element={
            <ShopCart
            selected = {filteredSelectedProducts}
            setSelected = {setSelectedProducts}
            />}/>
            
        </Routes>
      <Footer />
    </div>
  );
}