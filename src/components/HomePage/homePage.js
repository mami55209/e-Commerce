import "./homePage.css";
import { Link } from "react-router-dom";
import Products from "./products/products";
export default function HomePage({fullProducts,selected,setSelected}){
    const categoryArray = [...new Set(fullProducts.map(product=>{
        return product.category
    }))];
    return(
        <main className="homePage">
            <section className="info-section">
                <h2>Your one-stop destination for all your shopping needs</h2>
                <p>Discover an unparalleled shopping experience with our extensive selection of products,
                    unbeatable prices, and exceptional customer service. Shop now and transform your shopping journey with us.</p>
                <Link to="/shop-cart">Shop Now</Link>
            </section>
            <section className="products-section">
            {categoryArray.map(category=>{
                return (
                    <Products
                    key={category}
                    category={category}
                    fullProducts={fullProducts}
                    selected={selected}
                    setSelected={setSelected}
                    />

                )
            })}
           
            </section>
        </main>
    )
}