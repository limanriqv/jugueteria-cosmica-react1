import React from 'react';

const FormBusqueda = ({busqueda}) => {
    return (
        <form className="d-flex" role="search">
        <input className="form-control me-1" type="search" placeholder={busqueda} aria-label="Search" />
        <button className="btn btn-secondary my-1 my-sm-1" type="submit">Buscar</button>
        </form>
    );
}

export default FormBusqueda;
