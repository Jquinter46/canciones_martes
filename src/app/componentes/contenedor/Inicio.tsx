import { NavLink } from "react-router-dom";
import eladio from "../../../assets/img/eladio.avif"
import omy from "../../../assets/img/omy.jpg"
import ryan from "../../../assets/img/ryan.webp"

export const Inicio = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ryan} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={eladio} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={omy} className="d-block w-100" alt="" />
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
