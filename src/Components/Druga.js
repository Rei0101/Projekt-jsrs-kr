import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slika from "../youngkeanu.jpg";
import { LoginContext } from "../Context/LoginContext";

function Druga() {
  const { jeUlogiran, toggleLogin } = useContext(LoginContext);
  return (
    <div className="druga">
      <h1>Rani život</h1>
      <p>
        Reeves je rođen u Beirutu, Libanonu. Ime "Keanu" na havajskom jeziku
        znači "hladni planinski povjetarac". Njegova majka, Patricia Bond,
        kostimografkinja i izvođačica, engleskog je podrijetla, a otac, geolog
        Samuel Nowlin Reeves ml., havajsko-kineskoga podrijetla. Reevesova majka
        je radila u Beirutu kad je srela njegova oca. Samuel Reeves je radio kao
        službenik i dobio diplomu GED-a (General Educational Development) dok je
        služio zatvorsku kaznu na Havajima zbog posjedovanja heroina na
        aerodromu Hilo International. Napustio je svoju suprugu i obitelj kad je
        Reevesu bilo tri godine, te Reeves trenutno nije u kontaktu s njim.
        Prvenstveno je živio u Torontu nakon toga. Zbog disleksije Reeves je bio
        uspješniji u hokeju nego u učenju. Bio je uspješan vratar u jednoj od
        svojih srednjih škola ("Oaklands", De La Salle College u Torontu).
        Reeves je maštao da igra za kanadski hokejaški tim na Olimpijskim
        igrama, ali zbog ozljede je morao završiti karijeru hokejaša. Nakon toga
        se počeo zanimati za glumu, te je odustao od škole i nikad nije primio
        srednjoškolsku diplomu.
      </p>
      <br></br>
      <img src={Slika}></img>
      <br></br>
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

export default Druga;
