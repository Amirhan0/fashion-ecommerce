import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HeaderForEveryone from "./components/HeaderForEveryone";
import AppRouter from "./routes/router.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="bg-custom-gradient px-1 sm:px-[200px] lg:px-[176px]">
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
