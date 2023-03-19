import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Hello />
    </div>
  );
}

export default App;
