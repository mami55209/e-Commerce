import { useState } from "react";
export default function UniProduct({selected, setSelected , filteredProducts , d }){
    const [addIsClicked , setAddIsClicked] = useState(false);
    const [removeIsClicked , setRemoveIsClicked] = useState(true);
  
    if(d){
        return(
            <li 
            className="uni-list-item" 
            >
                <img 
                className="uni-img" 
                src={d.image}
                alt={d.description}
                />
                <p>{d.title} </p>
                <p>Price: {d.price}</p>
                <button
                onClick={(e)=>{
                setSelected([...selected,
                    ...filteredProducts.filter((pressed)=>{return(pressed.id === d.id)})
                ])
                setAddIsClicked(!addIsClicked)
                setRemoveIsClicked(!removeIsClicked)
            }}
            disabled = {addIsClicked}
            >Add To Cart</button>
                <button onClick={()=>{
                    setSelected(selected.filter((pressed)=>{return(pressed.id !== d.id)}))
                    setRemoveIsClicked(!removeIsClicked)
                    setAddIsClicked(!addIsClicked)
                }}
                disabled = {removeIsClicked}
                >Remove From Cart</button>
            </li>
        )
    }else{ return <div>loading</div>}
}