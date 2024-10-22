import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slika from "../matrix.jpg";
import Slika2 from "../wick.jpg";
import { useState, useRef, useEffect } from "react";
import { LoginContext } from "../Context/LoginContext";

function Cetvrta() {
  const { jeUlogiran, toggleLogin } = useContext(LoginContext);
  const [filmovi, postaviFilm] = useState([]);
  const [nazivFilma, postaviNaziv] = useState("");
  const [imeRedatelja, postaviIme] = useState("");
  const [zanr, postaviZanr] = useState("");
  const inputRef = useRef("");
  const brojac = useRef(0);
  useEffect(() => {
    brojac.current = brojac.current + 1;
  }, [filmovi]);

  const handlesubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    postaviFilm([
      ...filmovi,
      { naziv: nazivFilma, redatelj: imeRedatelja, zanr: zanr }
    ]);
  };

  return (
    <div className="cetvrta">
      <h1 className="najf">NAJPOZNATIJI FILMOVI</h1>
      <table>
        <tr>
          <td>
            <h5>THE MATRIX TRILOGIJA</h5>
            <a
              href="https://hr.wikipedia.org/wiki/The_Matrix_(filmska_trilogija)"
              target="_blank"
            >
              <img className="filmovi" src={Slika}></img>
            </a>
          </td>
          <td>
            <h5>JOHN WICK TRILOGIJA</h5>
            <a href="https://en.wikipedia.org/wiki/John_Wick" target="_blank">
              <img className="filmovi" src={Slika2}></img>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              The Matrix je znanstvenofantastična akcijska trilogija koju su
              kreirali Lana i Andy Wachowski. Filmski serijal su započeli filmom
              The Matrix (1999.), a uslijedila su dva nastavka, The Matrix
              Reloaded (2003.) i The Matrix Revolutions (2003.). Likovi i
              okruženje filma dalje su razrađeni u drugim medijima u istom
              fikcionalnom svemiru, uključujući animaciju, stripove i videoigre.
              Serial uključuje cyberpunk priču koja sadrži referencije na
              mnogobrojne filozofske i religijske ideje. Drugi utjecaji
              uključuju mitologiju, anime i hongkonške akcijske filmove (posebno
              tzv. heroic bloodshed i borilačke filmove).<br></br>(KLIKNI NA
              SLIKU ZA SAZNATI VIŠE)
            </p>
          </td>
          <td>
            <p>
              John Wick je američki neo-noir action-triler franšiza koju je
              kreirao producent Basil Iwanyk, scenarist Derek Kolstad i u
              vlasništvu Summit Entertainment. Keanu Reeves glumi John Wicka,
              umirovljenog ubojicu koji traži osvetu za ubojstvo psa kojeg mu je
              dala njegova nedavno preminula žena. Franšiza je započela s
              izdavanjem John Wicka u 2014 za kojim slijede dva nastavka, John
              Wick: Poglavlje 2 veljače 10, 2017, i John Wick: Poglavlje 3 -
              Parabellum svibnja 17, 2019. Sva tri filma smatrana su kritičnim i
              komercijalnim uspjesima, gomilajući kolektivni bruto od više od
              587 milijuna dolara diljem svijeta. Četvrti dio, John Wick:
              Poglavlje 4, je u predprodukciji i ima datum izdavanja svibnja 27,
              2022.<br></br>(KLIKNI NA SLIKU ZA SAZNATI VIŠE)
            </p>
          </td>
        </tr>
      </table>
      <h4>NAPRAVI LISTU SVOJIH NAJDRAŽIH KEANU REVEES FILMOVA</h4>
      <table>
        <tr>
          <td>Naziv filma:</td>
          <td>Redatelj:</td>
          <td>Žanr:</td>
        </tr>
        {filmovi.map((objektfilm) => (
          <tr>
            <td>{objektfilm.naziv}</td>
            <td>{objektfilm.redatelj}</td>
            <td>{objektfilm.zanr}</td>
          </tr>
        ))}
      </table>
      <form onSubmit={handlesubmit}>
        <label>Unesi naziv filma: </label>
        <input
          type="text"
          required
          ref={inputRef}
          onChange={(e) => postaviNaziv(e.target.value)}
        />
        <br />
        <label>Unesi ime redatelja: </label>
        <input
          type="text"
          required
          onChange={(e) => postaviIme(e.target.value)}
        />
        <br />
        <label>Unesi žanr: </label>
        <input
          type="text"
          required
          onChange={(e) => postaviZanr(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Dodaj na listu" />
      </form>
      <br />
      Dosad unesenih filmova: {brojac.current}
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

export default Cetvrta;
