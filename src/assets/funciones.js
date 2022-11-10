export const consultarBDD = async (ruta) => {
    const promise = await fetch(ruta)
    const productos = await promise.json()
    return productos

}

    //'../json/productos.json'
    //const promise = await fetch('../json/productos.json')
    //const productos= await promise.json()
    //return cardProductos

    /*
    
    const cardProductos = productos.map(prod => 
        <div className="card cardProducto"key={prod.id}>
            <img src={`./img/${prod.img}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">Categoria:{prod.categoria}</p>
                <p className="card-text">Marca:{prod.marca}</p>
                <p className="card-text">Precio $:{prod.precio}</p>
                <p className="card-text">Stock:{prod.stock}</p>
                <button className='btn btn-danger'>Ver más</button>
            </div>
        </div>
      )

      */