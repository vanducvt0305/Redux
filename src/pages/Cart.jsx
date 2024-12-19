import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartAction,
  handleDeleteAction,
  handleQuantityAction,
} from "../redux/cartReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const arrProduct = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  const handleQuantity = (quantity, index) => {
    const action = handleQuantityAction({ quantity, index });
    dispatch(action);
  };
  const handleDelete = (index) => {
    const action = handleDeleteAction(index);
    dispatch(action);
  };
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
          {arrProduct?.map((product, index) => {
            return (
              <tr key={product.id}>
                <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                  {product.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                  {product.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                  <img src={`../src/img/${product.img}`} alt="" width={50} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                  {product.price}
                </td>
                <td className="text-sm text-gray-900 border border-gray-200">
                  <div className="px-5 py-3 text-2xl">
                    <button
                      className="py-1 px-4 bg-orange-500 rounded-md  mr-2 text-white"
                      onClick={() => {
                        handleQuantity(-1, index);
                      }}
                    >
                      -
                    </button>
                    {product.quantityCart}
                    <button
                      className="py-1 px-4 bg-orange-500 rounded-md  ml-2 text-white"
                      onClick={() => {
                        handleQuantity(1, index);
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">
                  <button
                    className="py-2 px-4 bg-orange-500 text-white rounded-md text-xl"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          localStorage.removeItem("arrProduct");
          const action = deleteCartAction("deleteCart");
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
