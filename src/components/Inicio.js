import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>
        Hi! My name is <strong>Carlos Roa</strong> and i'm a <strong>web developer</strong> living in Argentina,
        i'm specialized in <strong>frontend</strong> and i want to show you my <strong>work!</strong> Hope you like it 
        so we can get in touch.
      </h1>

      <h2>
        I can help you create your website, have more views to be more relevant on internet! <Link to="/contacto">Contact me.</Link>
      </h2>
      
      <section className='last-works'>

        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <div className='works'>

        </div>

      </section>

      <ListadoTrabajos limit="4" />

    </div>
  )
}
