import "./products.css";
import Product from "./product/product";
/* import { useState } from "react"; */

//create a list of selected array of each product 


export default function Products({fullProducts,selected, setSelected , category}){
   
return(
<div className="products">
    <h1 className="product-category">{category.toUpperCase()}</h1>
    <Product 
    category={category}
    fullProducts={fullProducts}
    selected={selected}
    setSelected={setSelected}
    />
    </div>
)
}
