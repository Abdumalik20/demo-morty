import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h2 className="about_title">About</h2>
      <div className="aim">
        <h3>What is this?</h3>
        <p className="aim_info">
          The Rick and Morty API is a REST(ish) and GraphQL API based on the
          television show Rick and Morty. You will have access to about hundreds
          of characters, images, locations and episodes. The Rick and Morty API
          is filled with canonical information as seen on the TV show.
        </p>
        <Link className="check_out" to="/docs">
          Check out the documentation to get started
        </Link>
      </div>
      <div className="author">
        <h3>Who are you?</h3>
        <p className="author info">
          We are{" "}
          <ExternalLink
            className="external_link"
            href="https://github.com/afuh"
          >
            <span>Axel Fuhrmann</span>,{" "}
          </ExternalLink>
          a guy who likes to develop things and{" "}
          <ExternalLink
            className="external_link"
            href="https://talitatraveler.com/"
          >
            {" "}
            <span>Talita</span>{" "}
          </ExternalLink>
          the "Rick and Morty data scientist" and hardcore fan.
        </p>
      </div>
    </div>
  );
}

export default About;
