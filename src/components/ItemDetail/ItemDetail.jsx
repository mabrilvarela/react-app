import ItemCount from '../../container/ItemListContainer/ItemCount/ItemCount'
import Intercamb from '../../components/Intercamb/Intercamb'


import './ItemDetail.css'

function ItemDetail({ producto }) {

  return (
    <div>
      <div className='detail'>
        <div>
          <img
            src={producto.img}
            style={{ marginLeft: '200px' }} />
        </div>
        <div className='detail-text'>
          <div
            style={{ fontSize: '25px', fontWeight: 'bolder' }}>
            {producto.nombre}
          </div>
          <div>
            {producto.descripcion}
          </div>
          <div
            style={{ fontSize: '17px', fontWeight: '500' }}>
            {producto.kg}
          </div>
          <div
            style={{ fontSize: '20px', fontWeight: 'bolder' }}>
            ${producto.precio}
          </div>
          <div>
            <ItemCount />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

