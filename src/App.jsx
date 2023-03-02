import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import { Home, Details } from "./pages";
import { Header } from "./containers";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/recipes/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:recipe" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
