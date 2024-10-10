import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="<383250645533-clr87g8h8v609hff2520sbij1s5ua25m.apps.googleusercontent.com>">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
