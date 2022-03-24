import {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { getFetch } from '../../helpers/getFetch' 

import './ItemListContainer.css'




function ItemListContainer ({greeting}) {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() =>{

        getFetch
        .then(resp => setProductos(resp))
        .catch()
        .finally(() => setLoading(false))
    })

    return (

        <div className='lista'>

            {greeting}

            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ItemList productos={productos} />
            </div>

        </div>

    )
}

export default ItemListContainer

