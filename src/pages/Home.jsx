import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../redux/cartReducer";

const Home = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const dispatch = useDispatch();
  const getProductList = () => {
    axios({
      url: "https://673e9132a9bc276ec4b4dac3.mockapi.io/Phone",
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        setArrProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProductList();
  }, []);
  const handleClick = (item) => {
    const action = addToCartAction({ ...item });
    dispatch(action);
  };
  return (
    <div>
      <div className="text-3xl text-center">Product List</div>
      <div className="grid grid-cols-3 gap-4">
        {arrProduct.map((item) => {
          return (
            <div key={item.id}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={`../src/img/${item.img}`}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.desc}
                  </p>
                  <button
                    onClick={() => {
                      handleClick(item);
                    }}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
