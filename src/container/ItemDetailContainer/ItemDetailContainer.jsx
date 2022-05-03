import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetail from "../../components/ItemDetail/ItemDetail"


function ItemDetailContainer() {

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { detailId } = useParams()

  useEffect(() => {
    const querydb = getFirestore()
    const queryProd = doc(querydb, 'productos', detailId)
    
    getDoc(queryProd)
    .then(resp => setProduct( { id: resp.id, ...resp.data()} ))
    .finally(() => setLoading(false))
  }, [detailId])

  return (
    <div>
      {loading ? <h3>Cargando...</h3> :
        <div>
          <ItemDetail product={product} />
        </div>
      }
    </div>
  )
}

export default ItemDetailContainer