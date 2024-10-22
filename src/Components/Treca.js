import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slika from "../keanuboy.jpg";
import Slika2 from "../keanusuperboy.jpg";
import { LoginContext } from "../Context/LoginContext";

function Treca() {
  const { jeUlogiran, toggleLogin } = useContext(LoginContext);
  return (
    <div>
      <p>
        Reeves je započeo karijeru glumca s devet godina, pojavljujući se u
        kazališnoj produkciji Damn Yankeesa. S petnaest je glumio Merkuzia u
        Romeu i Juliji u kazališti Leah Posluns. Reeves je debitirao na ekranu u
        seriji CBC Televisiona Hangin' In. Tijekom ranih osamdesetih pojavljivao
        se u reklamama (uključujući jednu za Coca-Colu). Proveo je kasne 80-te
        pojavljujući se u brojnim tinejdžerskim filmovima kao što je Permanent
        Record i u neočekivano uspješnoj komediji Bill & Ted's Excellent
        Adventure iz 1989., te u nastavku 1991. - Bill & Ted's Bogus Journey,
        koji su odredili Reevesa kao glumca za uloge izgubljenih
        tinejdžera.Tijekom ranih devedesetih Reeves je počeo izlaziti iz faze
        tinejdžerskih filmova. Godine 1994. Reevesova je karijera dosegla nove
        vrhunce ulogom u filmu Brzina. Neočekivan internacionalni uspjeh
        pretvorio je Reevesa u jednog od najprofitabilnijih glumaca. Nakon toga
        stvari su za njega usporile, no pad je prekinut nakon horora/drame
        Đavolji odvjetnik u kojem se pojavio s Alom Pacinom i Charlize Theron.
        No po kritičarima ta izvedba nije ni približno dobra kao hit 1999. god.
        The Matrix. Između prvog Matrixa i njegovih nastavaka Reeves je dobio
        pozitivne osvrte za ulogu nasilnog muža u filmu Dar iz 2000. Osim Dara,
        Reeves se pojavio u nekoliko filmova koji su dobili uglavnom negativne
        osvrte i ostvarili slab uspjeh na kinoblagajnama, uključujući filmove
        Lovac, Slatki studeni i Zamjene. Međutim, dva nastavka trilogije The
        Matrix, The Matrix Reloaded i The Matrix Revolutions, Ljubav nema
        pravila, i akcijski horor iz 2005. Constantine, bili su uspješni te
        vratili Reevesa u središte pažnje. Reeves je 2008. započeo
        predprodukciju svojeg redateljskog debija, višejezičnog filma Man of Tai
        Chi, djelomično inspiriranog životom svojeg prijatelja, kaskadera Tigera
        Chena. Film je bio sniman u kontinentalnom dijelu Kine i Hong Kongu.
        Tijekom petogodišnjeg pisanja scenarija i produkcije, Reeves je odigrao
        nekoliko glavnih uloga u b-filmovima (Henryjev zločin, Generation
        Um...., itd.) i fantastičnom akcijskom filmu 47 ronina. Reevesov
        redateljski debi Man of Tai Chi premijerno je prikazan 2013. na Filmskom
        festivalu u Pekingu i filmskom festivalu u Cannesu Film je bio nagrađen
        u Pekingu, i pohvalio ga je redatelj borilačkih filmova John Woo. Reeves
        je nastavio glumiti istodobno istražujući druge oblike umjetnosti. U
        listopadu 2014. odigrao je glavnu ulogu u akcijskom trileru John Wick.
        Film, u kojem Reeves glumi umirovljenog plaćenog ubojicu, dobio je
        pozitivne kritike i postigao dobar uspjeh na kinoblagajnama. Također je
        dobio oznaku Certified Fresh na popularnom mrežnom mjestu Rotten
        Tomatoes.
      </p>
      <img className="dvakeanua" src={Slika}></img>
      <img className="dvakeanua" src={Slika2}></img>
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

export default Treca;
