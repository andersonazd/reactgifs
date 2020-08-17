//como funciona esta parte: desde el componente principal GifExpertApp se requiere obtener el set para el hook
//que tendrá y mostrará las categorías en el home, entonces se crea otro componente que tendrá el form para tomar
//esos datos. Desde GifExpertApp se llama el componente AddCategory y se le manda el set que funciona tanto para 
//enviar la función como para recibir los datos procesados. en este componente se obtiene el set por medio de 
//setCategories en el () de la const AddCategory y se procede a crear el formulario. este formulario tiene un solo input, a este se le da el valor de 
//inputValue, es de tipo text y en onChange handleInputChange para que vaya registrando el evento de cuando se ingresa
//cada palabra, despues en el formulario se le da el onSubmit para que una vez se dé enter, tome el evento y guarde 
//la data de inputValue en un array llamado cats que será enviado a GifExpertApp por medio del setCategories

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (

        <form onSubmit={ handleSubmit }>
        <input 
        type="text"
        value={ inputValue}
        onChange={ handleInputChange }
        />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
