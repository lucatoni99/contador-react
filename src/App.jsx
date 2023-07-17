import { Container } from "react-bootstrap";
import "./App.css";
import Titulos from "./componets/Titulos";
import "bootstrap/dist/css/bootstrap.min.css";
import Contador from "./componets/contador";

function App() {
  const estado = true;
  return (
    <Container>
      <Titulos
        subtitulo="este subtitulo fue creado con props"
        estadoNuevo={estado}
      ></Titulos>
      <Contador></Contador>
    </Container>
  );
}

export default App;
