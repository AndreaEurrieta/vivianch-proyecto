import { Item } from "./Item";
import './ItemList.css';

export const ItemList = ({ items }) => {
  return (
    <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-6 listContainer">
      {
          items.map((item) =>
            <Item
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={item.price}
            />
          )
        }
      </div>
      </div>
  )
};