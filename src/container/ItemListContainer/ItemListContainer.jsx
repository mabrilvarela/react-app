import { useState, useEffect } from 'react'
import { getFetch } from '../../helpers/getFetch'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'

import './ItemListContainer.css'


function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        if (categoriaId) {
            getFetch
                .then(resp => setProductos(resp.filter(item => item.categoria === categoriaId)))
                .catch()
                .finally(() => setLoading(false))
        } else {
            getFetch
                .then(resp => setProductos(resp))
                .catch()
                .finally(() => setLoading(false))
        }
    }, [categoriaId])


    return (
        <div>
            {loading ? <h3>Cargando...</h3> :
                <div className='itemlist'>
                    <ItemList productos={productos} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer

