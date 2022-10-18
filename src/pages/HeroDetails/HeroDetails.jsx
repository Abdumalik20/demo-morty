import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HeroDetails.css";

function HeroDetails() {
  const [hero, setHero] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setHero(data.results));
  }, []);

  const chosenHero = hero.find((item) => item.id === Number(id));
  console.log(chosenHero);

  return (
    <div className="heroDetails">
      <div className="detail_grid">
        <div className="hero_img">
          <img src={chosenHero?.image} alt="hero" />
        </div>
        <div className="hero_infos">
          <p>Created: {chosenHero?.created}</p>
          <p>Gender: {chosenHero?.gender}</p>
          <p>Name: {chosenHero?.name}</p>
          <p>Species: {chosenHero?.species}</p>
          <p>Status: {chosenHero?.status}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroDetails;
