import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'

import './ItemListContainer.css'


function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        if (categoriaId) {
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')
            const queryFilter = query(queryCollection,
                where('categoria', '==', categoriaId)
            )

            getDocs(queryFilter)
                .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
                .finally(() => setLoading(false))
        } else {
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')

            getDocs(queryCollection)
                .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
                .finally(() => setLoading(false))
        }

    }, [])

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

