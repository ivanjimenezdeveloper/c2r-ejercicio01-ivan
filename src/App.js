import { useState } from "react";

function App() {
  const clasesGlobico = "fab fa-fly p-absolute";
  let timer;
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
      500
    );
  };

  return (
    <div className="App">
      <i
        className={clasesGlobico}
        style={{ top: ejesPosicion.y, left: ejesPosicion.x }}
        onMouseOver={posicionAleatoria}
      ></i>
    </div>
  );
}

export default App;
