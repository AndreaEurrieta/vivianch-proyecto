export const CartItem = ({ imgUrl, cant, category, price, title, id, handeleDeleteItem }) => {

    return (
      <div className="card mb-3" style="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={imgUrl} className="img-fluid rounded-start" alt="img"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p class="card-text"><spam>{price}</spam></p>
        <p class="card-text"><spam>{cant}</spam></p>
        <p className="card-text"><small className="text-muted">{category}</small></p>
      </div>
      <div>
      <button className="btn btn-danger" onClick={() => { handeleDeleteItem(id) }}>Delete</button>
      </div>
    </div>
  </div>
</div>
      // <div className='border'>
      //   <img src={imgUrl}/>
      //   <p>cant:{cant}</p>
      //   <p>category:{category}</p>
      //   <p>price:{price}</p>
      //   <p>title:{title}</p>
    //   //   <button
    //       className='btn btn-danger'
    //  onClick={() => { handeleDeleteItem(id) }}
    //   >Delete</button>
      // </div>
    )
  }