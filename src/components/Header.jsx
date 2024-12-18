import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const arrProduct = useSelector((state) => state.cartReducer.cart);
  console.log(arrProduct);
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="p-4 text-2xl mr-4">
            <NavLink to="/home">Home</NavLink>
          </div>
          <div className="p-4 text-2xl ">
            <NavLink to="/cart">Cart</NavLink>
          </div>
        </div>

        <NavLink
          className="text-2xl py-4 px-6 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition-all duration-300"
          to="/cart"
        >
          <div className="flex items-center">
            <i className="fa fa-cart-plus"></i>
            <p>{arrProduct.length}</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
