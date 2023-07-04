import React from 'react'

import "./Modal.scss";

export default function Alert({name}) {
  return (
    <div className='alert'>
        <h1>Estimado {name} su reservacion ha sido exitosa</h1>
    </div>
  )
}
