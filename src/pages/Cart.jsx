import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../redux/cartReducer";

const Cart = () => {
  const arrProduct = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <table className="min-w-full border-collapse border border-gray-200 mt-10">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
              Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
              Img
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {arrProduct?.map((product) => {
            return (
              <tr key={product.id}>
                <td class="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                  {product.id}
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                  {product.name}
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                  <img src={`../src/img/${product.img}`} alt="" width={50} />
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                  {product.price}
                </td>
                <td class="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                  {product.quantityCart}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          localStorage.removeItem("arrProduct");
          const action = deleteCart("deleteCart");
          dispatch(action);
        }}
        className="text-3xl px-6 py-4 rounded-lg bg-orange-600 text-white text-center mt-10"
      >
        Xoá Cart
      </button>
    </div>
  );
};

export default Cart;
