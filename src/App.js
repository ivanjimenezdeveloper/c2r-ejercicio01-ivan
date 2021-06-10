import { useState } from "react";

function App() {
  const clasesGlobico = "fab fa-fly p-absolute animado";
  let timer;
  const [puntuacion, setPuntuacion] = useState(0);
  const posicionYAleatoria = () =>
    Math.floor(Math.random() * window.innerHeight);
  const posicionXAleatoria = () =>
    Math.floor(Math.random() * window.innerWidth);

  const [ejesPosicion, setEjesPosicion] = useState({
    x: posicionXAleatoria(),
    y: posicionYAleatoria(),
  });

  const posicionAleatoria = () => {
    clearTimeout(timer);
    timer = setTimeout(
      () =>
        setEjesPosicion({ y: posicionYAleatoria(), x: posicionXAleatoria() }),
      300
    );
  };

  const aumentarPuntuacion = () => setPuntuacion(puntuacion + 1);

  return (
    <div className="App">
      <p>
        Puntuacion <span>{puntuacion}</span>
      </p>
      <i
        className={clasesGlobico}
        style={{ top: ejesPosicion.y, left: ejesPosicion.x }}
        onMouseOver={posicionAleatoria}
        onClick={aumentarPuntuacion}
      ></i>
    </div>
  );
}

export default App;
