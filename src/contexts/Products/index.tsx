import React, { useState, useContext, createContext, useCallback } from "react";
import { getProductsService } from "./services";

export const ProductsContext = createContext(null);

export function ProductsProvider(props) {
  const [listOfProducts, setListOfProducts] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      // pegar o serviço
      const data = await (await getProductsService()).json();
      setListOfProducts(data);
      return true;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        listOfProducts,
        setListOfProducts,
        getProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  const contextHook = useContext(ProductsContext);
  if (!contextHook) {
    throw new Error(
      "useProducts deve ser usado de DENTRO do provider do contexto!!!"
    );
  } else {
    return contextHook;
  }
};
