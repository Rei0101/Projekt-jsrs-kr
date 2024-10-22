import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slika from "../keanu.jpg";
import Slika2 from "../zvijezda.jpg";
import Slika3 from "../keanutoystory.jpg";
import Slika4 from "../keanumotor.jpg";
import Slika5 from "../sadkeanu.jpg";
import Slika6 from "../keanue3.jpg";
import { LoginContext } from "../Context/LoginContext";

function Peta() {
  const { jeUlogiran, toggleLogin } = useContext(LoginContext);
  return (
    <div>
      <h1>GALERIJA</h1>
      <table>
        <tr>
          <td className="wrap">
            <img className="galerija" src={Slika}></img>
            <h3 className="tekst">K.Reeves na festivalu u Deauvilleu 2015.</h3>
          </td>
          <td className="wrap">
            <img className="galerija" src={Slika2}></img>
            <h3 className="tekst">
              Zvijezda na "Hollywoodskoj stazi slavnih" 2005.
            </h3>
          </td>
        </tr>
        <tr>
          <td className="wrap">
            <img className="galerija" src={Slika3}></img>
            <h3 className="tekst">
              Keanu na premijeri Toy Storya 4<br></br> u kojem je glumio Duke
              Kabooma
            </h3>
          </td>
          <td className="wrap">
            <img className="galerija" src={Slika4}></img>
            <h3 className="tekst">Poznato je da je Keanu ljubitelj motora</h3>
          </td>
        </tr>
        <tr>
          <td className="wrap">
            <img className="galerija" src={Slika5}></img>
            <h3 className="tekst">
              Poznata slika "tužnog Keanua" kako jede sendvič
            </h3>
          </td>
          <td className="wrap">
            <img className="galerija" src={Slika6}></img>
            <h3 className="tekst">
              Keanu Reeves na E3 gaming<br></br> konferenciji zbog njegove
              pojave<br></br> u nadolazećoj videoigri Cyberpunk
            </h3>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>
            <Link className="link" to="/">
              <h3 onClick={() => toggleLogin()}>HOME</h3>
            </Link>
          </td>
          <td>
            <Link className="link" to="/druga">
              <h3>RANI ŽIVOT</h3>
            </Link>
          </td>
          <td>
            <Link className="link" to="/treca">
              <h3>KARIJERA</h3>
            </Link>
          </td>
          <td>
            <Link className="link" to="/cetvrta">
              <h3>NAJPOZNATIJI FILMOVI</h3>
            </Link>
          </td>
          <td>
            <Link className="link" to="/peta">
              <h3>GALERIJA</h3>
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Peta;
