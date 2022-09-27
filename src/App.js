import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [primulNumar, seteazaPrimulNumar] = useState(null);
  const [alDoileaNumar, seteazaAlDoileaNumar] = useState(null);
  const [operatie, seteazaOperatie] = useState(null);
  const [rezultat, seteazaRezultat] = useState(null);

  const cifre = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
  const operatii = ["+", "-", "*", "/"];
  const complete = primulNumar && alDoileaNumar && operatie;
  const status = `${Number(primulNumar)} ${operatie ?? ""} ${Number(
    alDoileaNumar
  )}`;

  console.log({
    primulNumar,
    alDoileaNumar,
    operatie,
    rezultat,
  });
  const handleAddNumber = (event) => {
    if (operatie) {
      if (alDoileaNumar) {
        seteazaAlDoileaNumar(alDoileaNumar + event.target.value);
      } else {
        seteazaAlDoileaNumar(event.target.value);
      }
    } else {
      if (primulNumar) {
        seteazaPrimulNumar(primulNumar + event.target.value);
      } else {
        seteazaPrimulNumar(event.target.value);
      }
    }
  };
  const handleEqual = () => {
    if (operatie === "+") {
      seteazaRezultat(Number(primulNumar) + Number(alDoileaNumar));
    }
    if (operatie === "-") {
      seteazaRezultat(Number(primulNumar) - Number(alDoileaNumar));
    }
    if (operatie === "*") {
      seteazaRezultat(Number(primulNumar) * Number(alDoileaNumar));
    }
    if (operatie === "/") {
      seteazaRezultat(Number(primulNumar) / Number(alDoileaNumar));
    }
  };
  return (
    <>
      <div>{rezultat ? rezultat : status}</div>
      <br />
      <div className="calculator-container">
        <div className="calculator-digits">
          {cifre.map((cifra) => (
            <button value={cifra} onClick={handleAddNumber}>
              {cifra}
            </button>
          ))}
        </div>
        <div className="calculator-operations">
          {operatii.map((operatia) => (
            <button
              value={operatia}
              onClick={(event) => seteazaOperatie(event.target.value)}
              disabled={!primulNumar}
            >
              {operatia}
            </button>
          ))}
        </div>
        <button onClick={handleEqual} disabled={!complete}>
          {" "}
          ={" "}
        </button>
        <button
          onClick={() => {
            seteazaPrimulNumar(null);
            seteazaAlDoileaNumar(null);
            seteazaOperatie(null);
            seteazaRezultat(null);
            console.clear();
          }}
        >
          Clear
        </button>
      </div>
    </>
  );
}
