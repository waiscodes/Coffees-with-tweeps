import "./App.css";
import Signin from "./components/Signin";
import Topics from "./components/Topics";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className='App'>
      <Signin />
      <Topics />
    </Container>
  );
}

export default App;
