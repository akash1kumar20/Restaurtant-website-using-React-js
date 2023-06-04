import Header from "./components/Formatting/Header";
import Menu from "./components/Display/Menu";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Cart />
      </header>
      <main>
        <Menu />
      </main>
    </div>
  );
}

export default App;
