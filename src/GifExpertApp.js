//como funciona: se crea un componente llamado GifExpertApp que tendrá dentro un componente para crear
//una categoria y otro componente para mostrar imagenes dependiendo de las categorías. Se crea entonces un
//hook state que tenga una categoría para mostrar y que obtenga más por medio del componente AddCateogry, mandandole la 
//función setCategories y esperando un array con las nuevas categorias a mostrar.
//en el componente para mostrar las categorías, se le envía al componente GifGrid una key con id para identificar los items
// de este y un array con los datos de la categoria este devuelve un array con los datos procesados y mostrandose.

import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

 
    return (
        <>
            <h1 className="text-center">Bienvenido a tu buscador</h1>
            <h1 className="text-center">El lugar para tus gifs favoritos!!!</h1>
            <h2 className="text-center">Evita ingresar información no deseada ;)</h2>
            <br></br>

            <h2 >Porfavor ingresa una categoria a mostrar</h2>
            <AddCategory setCategories={ setCategories}/>
            <hr />
            
            <ol>
                {
                categories.map( category =>(
                    <GifGrid 
                    key={category}
                    category={category}/>
                ))
                }
            </ol>

        </>
    )
}

export default GifExpertApp
