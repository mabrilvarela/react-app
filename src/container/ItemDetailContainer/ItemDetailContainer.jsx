import { useEffect, useState } from "react"
import { getFetch } from "../../helpers/getFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



function ItemDetailContainer() {

    const [producto, setProducto] = useState( {} )
    const { detailId } = useParams()
    
    useEffect(() =>{
      if(detailId){
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === detailId)))
        .catch()
        .finally()
      } else {
        getFetch
            .then(resp => setProducto(resp))
            .catch()
            .finally()
      }
    }, [detailId])

  return (
    <>
        <ItemDetail producto = {producto} />
    </>
  )
}

export default ItemDetailContainer