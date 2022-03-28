import {useState, useEffect} from 'react'
import { getFetch } from '../../helpers/getFetch'
import Item from "../Item/Item"

function ItemList() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{

        getFetch
        .then(resp => setProductos(resp))
        .catch()
        .finally(() => setLoading(false))
    }, [])
  
    return (
      <>
        { loading ? <h3>Cargando...</h3>:
        productos.map((producto) =>  <Item key={producto.id} producto={producto} /> )
        }
      </>
    )
}

export default ItemList