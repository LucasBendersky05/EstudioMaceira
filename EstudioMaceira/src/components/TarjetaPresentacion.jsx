import React from 'react'
import './TarjetaPresentacion.css'

export const TarjetaPresentacion = () => {
  return (
    <article className="card tarjeta-presentacion h-100 border-0 shadow">
      <img
        className="card-img-top tarjeta-img"
        src="/abogado.jpg"
        alt="abogado"
      />
      <div className="card-body text-center p-4">
        <p className="card-text tarjeta-texto mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, natus.
        </p>
      </div>
    </article>
  )
}