import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    finalPrice: 0,
  },
  reducers: {
    addProduct(state, action) {
      // const product = action.payload;
      // product.count = 1;
      if (state.products.some((product) => product.id === action.payload.id)) {
        const arrayAtualDeProdutos = state.products;
        const novoArrayDeProdutos = [...state.products];
        return { ...state };
      } else {
        const product = action.payload;
        product.count = 1;
        return { ...state, products: state.products.push(product) };
      }
    },
    removeProduct(state, action) {
      // const arrayAnterior = state.products;
      // const arrayFiltradaRemovendoProdutoAtual = arrayAnterior.filter(
      //   (produto) => produto.id !== action.payload.id
      // );
      // return { ...state, products: arrayFiltradaRemovendoProdutoAtual };
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    },
    removeAllProducts(state, action) {
      return { ...state, products: [] };
    },
    increaseProductCount(state, action) {
      return { ...state };
    },
  },
});

export const { addProduct } = slice.actions;
export const products = (state) => state.products;

export default slice.reducer;
