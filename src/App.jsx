import { Container } from "react-bootstrap";
import "./App.css";
import Titulos from "./componets/Titulos";
import "bootstrap/dist/css/bootstrap.min.css";
import Contador from "./componets/contador";

function App() {
  return (
    <Container>
      <Titulos></Titulos>
      <Contador></Contador>
    </Container>
  );
}

export default App;
