import { BiCoffeeTogo } from "react-icons/bi";
import { ExternalLink } from "react-external-link";
import "./Support.css";

function Support() {
  return (
    <div className="support">
      <h2 className="support_title">Support The Rick and Morty API</h2>
      <div className="support_info">
        <p className="maintain">
          Help to maintain The Rick and Morty API's infrastructure!
        </p>
        <p>
          If you are using the API for your app, your online tutorials or your
          coding challenges, please consider supporting us <br /> to help keep
          the project alive.
        </p>
        <p>
          We are not getting any money from this and we use our free time to
          keep the API running and the data up to <br /> date. Every
          contribution, however big or small, is super valuable for our future.
        </p>
        <p>Thanks!</p>
        <div className="buy_section">
          <BiCoffeeTogo color="green" />
          <ExternalLink
            className="buy_text"
            href="https://www.buymeacoffee.com/axelfuh"
          >
            <span> Buy me a coffee</span>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}

export default Support;
