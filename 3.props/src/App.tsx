import "./App.css";

import Container from "./Container";
import Product from "./Product";

const liste = ["ayakkabi", "pantolon"];

function App() {
  return (
    <div>
      <Container>
        <Product productName={liste[0]} productPreis={1200} />
      </Container>
    </div>
  );
}

export default App;
