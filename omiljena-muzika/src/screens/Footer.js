import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpotify} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <h2>Powered By Spotify <FontAwesomeIcon icon={faSpotify}/></h2>
      <p>YT API coming soon</p>
    </div>
  );
}