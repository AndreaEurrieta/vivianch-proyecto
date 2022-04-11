export const ItemList = ( props ) => {
    return(
        <div className="row row-cols-2 row-cols-md-3 g-6">
        <div className="col">
            <div className="card" style={{ width: '18rem'}}>
                <img src={props.imgUrl} className="card-img-top" alt="imagen" />
                <div className="card-body">
                    <h5 className="card-title" style={{ color: 'black' }}>{props.title}</h5>
                    <p className="card-text" style={{ color: 'black' }}>$ {props.price}</p>
                    <a href="#" className="btn btn-dark">+ Info</a>
                </div>
            </div>
        </div>
    </div>
    )
    };