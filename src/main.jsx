import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import ThemeProvider from "./context/ThemeContext.jsx";

import store from "./store/Store.jsx"; // Ensure the filename matches

import { Provider } from "react-redux"; // ✅ Correct import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* ✅ "store" should be lowercase */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
