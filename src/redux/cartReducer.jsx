import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const arrProduct = localStorage.getItem("arrProduct");
    return arrProduct ? JSON.parse(arrProduct) : []; // Trả về mảng nếu có dữ liệu, nếu không trả về mảng rỗng
  } catch (error) {
    console.error("Error loading cartList from localStorage:", error);
    return [];
  }
};

const initialState = {
  cart: loadCartFromLocalStorage(),
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      const product = action.payload;
      const indexProduct = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (indexProduct === -1) {
        const newProduct = { ...product, quantityCart: 1 };
        state.cart.push(newProduct);
        localStorage.setItem("arrProduct", JSON.stringify(state.cart));
      } else {
        const newProduct = {
          ...product,
          quantityCart: (state.cart[indexProduct].quantityCart += 1),
        };
        state.cart[indexProduct] = newProduct;

        localStorage.setItem("arrProduct", JSON.stringify(state.cart));
      }
    },
    deleteCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addToCartAction, deleteCart } = cartReducer.actions;

export default cartReducer.reducer;
