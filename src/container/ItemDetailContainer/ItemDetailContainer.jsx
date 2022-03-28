import { useEffect, useState } from "react"
import { getFetch } from "../../helpers/getFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"


function ItemDetailContainer() {

    const [producto, setProducto] = useState( {} )
    
    useEffect(() =>{

        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === '1')))
        .catch()
        .finally()
    }, [])

  return (
    <>
        <ItemDetail producto = {producto} />
    </>
  )
}

export default ItemDetailContainer