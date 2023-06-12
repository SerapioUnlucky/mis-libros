import { useState } from 'react';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({ setListadoState }) => {

    const conseguirDatos = (e) => {

        e.preventDefault();

        // Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // Crear objeto de la pelicula
        let libro = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        // Guardar en el almacenamiento local
        GuardarEnStorage("libros", libro);
        location.reload();

    }

    return (

        <div className="add">

            <h3 className="title">Añadir libro</h3>

            <form onSubmit={conseguirDatos}>
                <input type="text" id="titulo" placeholder="Ingrese título del libro" required />

                <textarea id="descripcion" name="descripcion" placeholder="Ingrese descripción del libro" required />

                <input type="submit" id="save" value="Guardar" />
            </form>

        </div>

    )
}
