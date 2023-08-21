import Header from "./components/Formatting/Header";
import Menu from "./components/Display/Menu";
import Cart from "./components/Cart/Cart";
import DataProvider from "./data_room/DataProvider";
import { useState } from "react";

function App() {
  const [cartHolder, cartVisibility] = useState(false);
  //here we're rendering Cart that's we managing it here.

  const cartVisibile = () => {
    cartVisibility(true);
  };
  const cartHidden = () => {
    cartVisibility(false);
  };
  return (
    <DataProvider>
      {/* as our all components needs data, that's wrapping all the components inside DataProvider */}
      <header className="App-header">
        {cartHolder && <Cart onHide={cartHidden} />}
        <Header onShow={cartVisibile} />
        {/* Header component have the cart button, that's why it hold the pointer  */}
      </header>
      <main>
        <Menu />
      </main>
    </DataProvider>
  );
}

export default App;
