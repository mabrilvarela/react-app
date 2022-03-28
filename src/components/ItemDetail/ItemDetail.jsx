function ItemDetail( {producto} ) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', marginTop: '50px', width: '100%', textAlign: 'center'}}>
        {producto.nombre}
        <br />
        {producto.precio}
    </div>
  )
}

export default ItemDetail