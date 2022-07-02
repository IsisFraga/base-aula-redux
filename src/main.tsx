import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductsProvider } from "./contexts/Products";
import { UiProvider } from "./contexts/UI";
import { Provider } from "react-redux";
import CartStore from "./store/Cart";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UiProvider>
    <ProductsProvider>
      <Provider store={CartStore}>
        <App />
      </Provider>
    </ProductsProvider>
  </UiProvider>
);
