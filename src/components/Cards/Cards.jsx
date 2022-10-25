import { useNavigate } from "react-router-dom";
import "./Cards.css";

function Card({ item }) {
  const navigate = useNavigate();

  const clickCard = () => {
    navigate(`/heroDetail/${item.id}`);
  };

  return (
    <div className="card">
      <div className="card_img">
        <img src={item.image} alt="heroes" />
      </div>
      <div onClick={clickCard} className="card_text">
        <div className="name">
          <h1 className="name_design">Name:</h1>
          <h1>{item.name}</h1>
        </div>
        <div className="gender">
          <h1 className="gender_design">Gender: </h1>
          <h1>{item.gender}</h1>
        </div>
        <div className="species">
          <h1 className="species_design">Species: </h1>
          <h1>{item.species}</h1>
        </div>
        <div className="status">
          <h1 className="status_design">Status: </h1>
          {item.status === "Dead" ? (
            <p className="dead"></p>
          ) : item.status === "Alive" ? (
            <p className="alive"></p>
          ) : (
            <p className="unknown"></p>
          )}
          <h1>{item.status}</h1>
        </div>
        <div className="location">
          <h1 className="location_design">Origin: </h1>
          <h1>{item.origin.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
