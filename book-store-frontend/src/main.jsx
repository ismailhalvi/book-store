import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { QuickViewProvider } from "./context/QuickViewContext.jsx";

document.documentElement.setAttribute("data-bs-theme", "dark");

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QuickViewProvider>
      <App />
    </QuickViewProvider>
  </Provider>
);