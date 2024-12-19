import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const arrProduct = useSelector((state) => state.cartReducer.cart);

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
          className="text-2xl py-4 px-6 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 group"
          to="/cart"
        >
          <div className="flex items-center bg-orange-500 group-hover:bg-orange-700 transition-all duration-300">
            <i className="fa fa-cart-plus"></i>
            <p className="w-[32px] h-[32px] bg-white rounded-full text-orange-500 relative right-1  group-hover:text-orange-700 transition-all duration-300">
              {arrProduct.reduce((total, item) => total + item.quantityCart, 0)}
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
