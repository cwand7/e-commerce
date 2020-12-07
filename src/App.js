import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import "./reset.scss";

function App() {
  return (
    <>
      <NavBar />
      <Home title="Tienda" />
      <Footer />
    </>
  );
}

export default App;
