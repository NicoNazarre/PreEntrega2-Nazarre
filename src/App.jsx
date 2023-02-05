import NavBar from "./components/NavBar";
import PromoApp from "./components/PromoApp";
import Footer from "./components/Footer";
import Destacado from "./components/Destacado";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Consultar disponibilidad de stock"} />
      <Destacado />
      <PromoApp />
      <Footer />
    </div>
  );
}

export default App;
