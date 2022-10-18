import { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";

function Home() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div className="home">
      {info?.results?.map((items) => (
        <Card
          key={items.id}
          id={items.id}
          name={items.name}
          image={items.image}
          location={items.location}
          origin={items.origin}
          species={items.species}
          status={items.status}
          url={items.url}
          episodes={items.episodes}
        />
      ))}
    </div>
  );
}

export default Home;
