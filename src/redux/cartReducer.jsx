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
    deleteCartAction: (state, action) => {
      state.cart = [];
    },
    handleQuantityAction: (state, action) => {
      const { quantity, index } = action.payload;

      if (state.cart[index].quantityCart === 1 && quantity === -1) {
        state.cart.splice(index, 1);
        localStorage.setItem("arrProduct", JSON.stringify(state.cart));
      } else {
        state.cart[index] = {
          ...state.cart[index],
          quantityCart: (state.cart[index].quantityCart += quantity),
        };
        localStorage.setItem("arrProduct", JSON.stringify(state.cart));
      }
    },
    handleDeleteAction: (state, action) => {
      const index = action.payload;
      state.cart.splice(index, 1);
      localStorage.setItem("arrProduct", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCartAction,
  deleteCartAction,
  handleQuantityAction,
  handleDeleteAction,
} = cartReducer.actions;

export default cartReducer.reducer;
