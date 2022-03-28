import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemCount from '../../container/ItemListContainer/ItemCount/ItemCount'

function Item( {producto} ) {

    return (
                <div className='col-md-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.img} />
                        <Card.Body>
                            <Card.Title>
                                {producto.nombre}
                            </Card.Title>
                            <Card.Text>
                                {producto.precio}
                            </Card.Text>
                            <ItemCount />
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </div>
    )
}

export default Item