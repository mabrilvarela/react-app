import ItemList from '../../components/ItemList/ItemList' 

import './ItemListContainer.css'


function ItemListContainer() {    

    return (  
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                { <ItemList /> }                
            </div>        
    )
}

export default ItemListContainer

