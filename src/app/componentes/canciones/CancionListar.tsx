import { useState } from "react";
import { Cancion } from "../modelo/Canciones";
import { ARREGLO_CANCIONES } from "../../mocks/Cancion mocks";
import { ARREGLO_CANCION_GENERO } from "../../utilidades/dominios/DomGenero";

export const CancionListar = () => {
  const [arrCanciones] = useState<Cancion[]>(ARREGLO_CANCIONES);

  const nombreGenero = (Valor: string) => {
    for(const objGenero of ARREGLO_CANCION_GENERO) {
      if (objGenero.codGenero==Valor){
        return objGenero.nombreGenero;
      }

    }
  }

  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No.</th>
                <th>Titulo Cancion</th>
                <th>Cantante</th>
                <th>Genero</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
            {arrCanciones.map((mican: Cancion)=>(
              <tr key={mican.codCancion} className="align-middle">
              <td>{mican.codCancion}</td>
              <td>{mican.tituloCancion}</td>
              <td>{mican.cantanteCancion}</td>
              <td>{nombreGenero(mican.codgeneroCancion)}</td>
              <td>
                <img src={mican.imagenCancionBase64} alt="no hay" className="imagenListado" />
                <br />                
                {mican.imagenCancion}                
              </td>
            </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
