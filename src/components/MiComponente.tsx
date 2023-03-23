import React, { FC } from 'react';

interface Props {
    nombre: string;
}

const MiComponente: FC<Props> = ({ nombre }) => {
    return (
        // Contenido que se renderiza en el DOM
        <div>
            <h1>Hola, mundo!</h1>
            <p>Mi nombre es {nombre}.</p>
        </div>
    );
};

export default MiComponente;