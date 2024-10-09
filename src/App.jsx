import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HeaderForEveryone from "./components/HeaderForEveryone";

import AppRouter from "./routes/router.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
  return (
    <>
      <div className="bg-custom-gradient h-full px-[176px]">
        <BrowserRouter>
          <HeaderForEveryone />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
