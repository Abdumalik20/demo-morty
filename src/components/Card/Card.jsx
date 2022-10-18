import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card({ id, image, name, status, species, location, origin }) {
  const navigate = useNavigate();

  const getHero = () => {
    navigate(`/heroDetails/${id}`);
  };

  return (
    <div className="grid_container" key={id}>
      <div className="hero_image">
        <img src={image} alt="" />
      </div>
      <div className="hero_info">
        <div className="hero_type">
          <h1 onClick={getHero}>{name}</h1>
          <div className="status">
            {status === "Dead" ? (
              <p className="circle_red"></p>
            ) : status === "Alive" ? (
              <p className="circle_green"></p>
            ) : (
              <p className="circle_unknown"></p>
            )}

            <h2>{status}</h2>
            <span>-</span>
            <h2>{species}</h2>
          </div>
        </div>
        <div className="place">
          <h4>Last known location:</h4>
          {location.name}
        </div>
        <div className="meet">
          <h4>First seen in:</h4>
          <h2>{origin.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
