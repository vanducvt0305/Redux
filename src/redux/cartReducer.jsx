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
      const newProduct = { ...product, quantityCart: 1 };
      state.cart.push(newProduct);
      localStorage.setItem("arrProduct", JSON.stringify(state.cart));
    },
    deleteCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addToCartAction, deleteCart } = cartReducer.actions;

export default cartReducer.reducer;
