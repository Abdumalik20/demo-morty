import "./HeroDetail.css";
import { useParams } from "react-router-dom";

function HeroDetail() {
  const { id } = useParams();
  return (
    <div className="heroDetail">
      <h1>heroDeatil :{id}</h1>
    </div>
  );
}

export default HeroDetail;
