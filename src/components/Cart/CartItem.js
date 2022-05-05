export const CartItem = ({ cant, category, price, title, id, handeleDeleteItem }) => {

    return (
      <div className='border'>
        <p>cant:{cant}</p>
        <p>category:{category}</p>
        <p>price:{price}</p>
        <p>title:{title}</p>
        <button
          className='btn btn-danger'
          onClick={() => { handeleDeleteItem(id) }}
        >Delete</button>
      </div>
    )
  }