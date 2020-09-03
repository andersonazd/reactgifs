//como funciona: el componente recibe un array con los datos de las categorias a mostrar en el GifGrid , está separada en
//un componente que creará un map con la cantidad de imagenes del array category y que mostrará esa cantidad de veces el 
// componente GifGridItem y un custom hook que procesa las imagenes y la pantalla de carga. En el componente llamado
//GifGridItem se envía una key y el array con los datos de las imagenes previamente procesatos en el custom hook.

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    //custom hook
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className="animate__animated animate__zoomIn"> Categoría escogida: {category } </h3>

        {/* {loading ? <p>loading</p> : null} */}
        {loading && <p className="animate__animated animate__zoomIn">Loading</p>}
        
        <div className="card-grid">
         
                {
                    images.map( img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }
          
        </div>
        </>
    )
}
