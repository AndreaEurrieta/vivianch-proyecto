import { ItemCount } from './ItemCount/ItemCount';


const onAdd = (count)=>{
    alert(`Se agregaron ${count} productos al carrito`);
}

export const ItemListContainer= ({greeting}) =>{
    return(
        <div>
            <h1>{greeting}</h1>
            <div>
                <ItemCount initial={1} stock={8} onAdd={onAdd}/>
            </div>
        </div>
    )
}
