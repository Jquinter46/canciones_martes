import { NavLink } from "react-router-dom";
import messi from "../../../assets/img/messi.jpg"
import ronaldo from "../../../assets/img/ronaldo.jpg"
import ney from "../../../assets/img/ney.jpg"

export const Inicio = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ney} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={messi} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={ronaldo} className="d-block w-100" alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
