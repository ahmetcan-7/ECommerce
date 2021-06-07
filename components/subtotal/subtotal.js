import React from 'react'

function Subtotal({ subtotal }) {
  return (
    <div style={{ margin: '3rem 0' }}>
      <h4 style={{ fontWeight: '400', fontSize: '2rem', margin: '0' }}>
        Subtotal:{subtotal}₺
      </h4>
    </div>
  )
}

export default Subtotal
