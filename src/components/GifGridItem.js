//como funciona: se trae el title y la url que estaban en el array categoria desde el componente GifGrid y se plasman
//en un div card

import React from 'react'

export const GifGridItem = ({title, url}) => {

    // console.log(title, url);

    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={url} alt={title}/>
        <p>{title}</p>
        </div>
    )
}
