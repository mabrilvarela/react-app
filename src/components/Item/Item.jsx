import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './Item.css'

function Item( {product} ) {
    return (
                <div className='col-md-4'>
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Img variant="top" src={product.img} className='img-main' />
                        <Card.Body className='card-body'>
                            <Card.Title>
                                {product.name}
                            </Card.Title>
                            <Card.Text className='card-text'>
                                {product.kg}
                            </Card.Text>
                            <Link to={`/detail/${product.id}`} >
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