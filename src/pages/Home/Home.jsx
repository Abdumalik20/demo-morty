import { useEffect, useState } from "react";
import Pagenation from "../../Pagenation";
import Card from "../../components/Cards/Cards";
import "./Home.css";
import Search from "../../Search";
import { ImSearch } from "react-icons/im";

function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data.results);
    })();
  }, [api]);

  console.log(fetchedData);

  let catchError = "Not Found!";

  return (
    <div className="home">
      <div className="search">
        <Search setSearch={setSearch} />
        <ImSearch className="search_icon" />
      </div>
      <div className="home_grid">
        {fetchedData ? (
          fetchedData.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <h1 className="not_found">{catchError}</h1>
        )}
      </div>
      <div className="btns">
        <Pagenation setPageNumber={setPageNumber} pageNumber={pageNumber} />
      </div>
    </div>
  );
}

export default Home;
