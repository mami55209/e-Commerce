import "./shopCart.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ShopCart({selected,setSelected}){
    const [shopArray, setShopArray] = useState(selected.map((product)=>{
        return (
           {...product,
           qty:1
           }
        );}));
   let totalPrice = 0;
     shopArray.forEach(element => {
        totalPrice = totalPrice + (element.price*element.qty);
       });
    return(
        <>
        <div className="cart">
            {totalPrice?  shopArray.map((d,i)=>{
                if(d.qty!==0){
            return(
                <li 
                className="uni-list-item" 
                key={i}
                >
                    <img 
                    className="uni-img" 
                    src={d.image}
                    alt={d.description}
                    />
                    <p>{d.title} </p>
                    <p>Price: {d.price}</p>
                    <p>Quantity: {d.qty}</p>
                    <button onClick={()=>{
                        setShopArray( [...shopArray.map(product=>{
                            if(product.id === d.id){
                                return { ...product, qty: product.qty +1}
                            }else{
                                return product;
                            }
                        })])
                       
                    }}>+</button>
                    <button onClick={()=>{
                        setShopArray( [...shopArray.map(product=>{
                            if(product.id === d.id){
                                if(product.qty >0){
                                return { ...product, qty: product.qty -1}
                            }else{
                                return product;
                            }
                            }else{
                                return product;
                            }
                        })])
                        if(d.qty <= 1){
                            setSelected(selected.filter((pressed)=>{return(pressed.id !== d.id)}))
                        }
                    }}>-</button>
                </li>
            ) }
        }):<>
        <div>Go and Pick Something</div>
        <Link to="/">HomePage</Link>
        </>}
        </div>
        <div>Total Price:{totalPrice.toFixed(2)}</div>
        </>
    )
}