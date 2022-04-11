import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div className="row row-cols-2 row-cols-md-3 g-6">
      <div className="col">
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