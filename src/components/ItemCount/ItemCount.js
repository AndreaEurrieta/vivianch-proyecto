import "./ItemCount.css"
import React, { useState, useEffect } from "react";

export const ItemCount=({ stock, initial, onAdd })=>{
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const handleRemove = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    useEffect(()=>{
        
    }, [count])

        return (
        <div className="">
            <button onClick={handleAdd} type="button" className="cart">+</button>
            <p>{count}</p>
            <button onClick={handleRemove} type="button" className="cart">-</button>
            <button onClick={()=>onAdd(count)} type="button" className="cart">Agregar al carrito</button>
        </div>
    )
}
