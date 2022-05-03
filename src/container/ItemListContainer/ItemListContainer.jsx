import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList'

import './ItemListContainer.css'


function ItemListContainer() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'productos')
        const queryFilter = categoryId ?
            query(queryCollection,
                where('category', '==', categoryId)
            )
            :
            queryCollection
        getDocs(queryFilter)
            .then(resp => setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
            .finally(() => setLoading(false))

    }, [categoryId])

    return (
        <div>
            {loading ? <h3>Cargando...</h3> :
                <div className='itemlist'>
                    <ItemList products={products} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer

