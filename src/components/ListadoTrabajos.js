import React from 'react';
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom';

export const ListadoTrabajos = ({limit}) => {
    
  
    return (
        
          <section className='works'>
          {
            trabajos.slice(0, limit).map(trabajo => {
              return(
              
              <article key={trabajo.id} className="work-item">
                <div className='mask'>
                <Link to={"/proyecto/"+trabajo.id}><img src={"/images/"+trabajo.id+".png"} alt=""/></Link>
                </div>
    
                <span>{trabajo.categorias}</span>
                <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
                <h3>{trabajo.tecnologias}</h3>
              </article>
              );
            })
          }
          </section>
    
      )
}
