import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <p style={{ backgroundColor: "orange" }}>Ceci est une modification</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum animi
        voluptatem quidem. Et maxime libero vitae suscipit. Enim commodi sint
        vitae laborum saepe, maxime ullam tempora accusantium ab. Quo,
        asperiores.
      </p>
      <span>Salut</span>
      <Footer />
    </>
  );
}

export default App;
