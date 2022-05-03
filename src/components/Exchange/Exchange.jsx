import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Exchange.css'


export const ImputCount = () => {
    return (
        <span>
            <Link to='/' >
                <button
                    className='btn btn-outline-primary'>
                    Seguir comprando
                </button>
            </Link>
            <Link to='/cart' >
                <button
                    className='btn btn-outline-success'>
                    Terminar compra
                </button>
            </Link>
        </span>
    )
}

const ButtonCount = ({ handleInter }) => {
    return <button
        className='btn btn-outline-danger'
        onClick={handleInter}>
        Agregar al carrito
    </button>
}

const Exchange = () => {

    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
    }

    return (
        <div>
            {
                inputType === 'button' ?
                    <ButtonCount handleInter={handleInter} />
                    :
                    <ImputCount />
            }
        </div>
    )
}

export default Exchange