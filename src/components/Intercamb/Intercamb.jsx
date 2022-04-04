import {useState} from 'react'
import { Link } from 'react-router-dom'
import './Intercamb.css'


const ImputCount= () => {

    return (
        <Link to= '/cart' >
            <button
                className='btn btn-outline-success'>
                Terminar compra
            </button>
        </Link>
    )
}

const ButtonCount= ({handleInter}) => {

    return <button 
            className='btn btn-outline-danger'
            onClick={handleInter}>
            Agregar al carrito
            </button>
}

const Intercamb= () => {

    const [inputType, setInputType] = useState('button')

    const handleInter= () => {
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

export default Intercamb