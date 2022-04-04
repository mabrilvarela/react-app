import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import './Item.css'

function Item( {producto} ) {

    return (
                <div className='col-md-4'>
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src={producto.img} className='img-main' />
                        <Card.Body className='card-body'>
                            <Card.Title>
                                {producto.nombre}
                            </Card.Title>
                            <Card.Text className='card-text'>
                                {producto.kg}
                            </Card.Text>
                            <Link to={`/detail/${producto.id}`} >
                                <Button variant="danger">
                                    Detalle del producto
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
    )
}

export default Item