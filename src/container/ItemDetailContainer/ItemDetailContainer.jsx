import { useEffect, useState } from "react"
import { getFetch } from "../../helpers/getFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



function ItemDetailContainer() {

  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const { detailId } = useParams()

  useEffect(() => {
    if (detailId) {
      getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === detailId)))
        .catch()
        .finally(() => setLoading(false))
    } else {
      getFetch
        .then(resp => setProducto(resp))
        .catch()
        .finally(() => setLoading(false))
    }
  }, [detailId])

  return (
    <div>
      {loading ? <h3>Cargando...</h3> :
        <div>
          <ItemDetail producto={producto} />
        </div>
      }
    </div>
  )
}

export default ItemDetailContainer