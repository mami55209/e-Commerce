import { useState } from "react";
import "./product.css";
import UniProduct from "./uniProduct";

export default function Product({fullProducts,selected, setSelected , category, filteredProducts}){
    if(fullProducts){
        filteredProducts = fullProducts.filter(p=>p.category === category);
    }
    return(
    <div className="uni-product">
        {filteredProducts && filteredProducts.map((data)=>{
            return(
                <UniProduct
                selected = {selected}
                setSelected = {setSelected}
                d = {data}
                filteredProducts = {filteredProducts}
                key={data.id}
                />
            )
        })}
    </div>
)}