"use client";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { data } from "../data/moviedata";

const ProductSearchForm = ({ setFilteredProducts }) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [products, setProducts] = useState(data);

  // useEffect(() => {
  //   // console.log("Test useEffect", searchText);
  //   const filteredProducts = searchText
  //     ? products.filter((product) =>
  //         product.name.toLowerCase().includes(searchText.toLowerCase())
  //       )
  //     : products;
  //   // console.log("this is test", filteredProducts);
  //   setFilteredProducts(filteredProducts);
  // }, [searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredProducts = searchText
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : products;
    console.log("this is test", filteredProducts);
    setFilteredProducts(filteredProducts);
  };

  return (
    <section className="relative z-[1] overflow-hidden bg-neutral-900 py-16 px-8 font-arimo">
      <div className="container flex justify-center">
        <div className="w-full px-4 text-white lg:w-1/2 lg:px-0">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              Search for products
            </h2>
            <p className="text-lg lg:text-xl opacity-80">By name or category</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
          >
            <input
              id="search"
              placeholder="Enter movie name"
              className="px-6 py-2 text-neutral w-full rounded-md flex-1 outline-none bg-white"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-black hover:bg-slate-900 border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
            >
              <div className="relative">
                {/* Loading animation change opacity to display */}
                <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                  <svg
                    className="opacity-0 animate-spin w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx={12}
                      cy={12}
                      r={10}
                      stroke="currentColor"
                      strokeWidth={4}
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-center transition-all opacity-1 valid:">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Search
                  </span>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
      <span className="absolute top-0 right-0 -z-10">
        <svg
          width="388"
          height="250"
          viewBox="0 0 388 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
            fill="url(#paint0_linear_971_6910)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_971_6910"
              x1="60.5"
              y1="111"
              x2="287"
              y2="111"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.520507" stopColor="white"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="absolute top-0 right-0 -z-10">
        <svg
          width="324"
          height="250"
          viewBox="0 0 324 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
            fill="url(#paint0_linear_971_6911)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_971_6911"
              x1="60.5"
              y1="111"
              x2="287"
              y2="111"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.520507" stopColor="white"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="absolute top-4 left-4 -z-10">
        <svg
          width="43"
          height="56"
          viewBox="0 0 43 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <circle
              cx="40.9984"
              cy="1.49626"
              r="1.49626"
              transform="rotate(90 40.9984 1.49626)"
              fill="white"
            ></circle>
            <circle
              cx="27.8304"
              cy="1.49626"
              r="1.49626"
              transform="rotate(90 27.8304 1.49626)"
              fill="white"
            ></circle>
            <circle
              cx="14.6644"
              cy="1.49626"
              r="1.49626"
              transform="rotate(90 14.6644 1.49626)"
              fill="white"
            ></circle>
            <circle
              cx="1.49642"
              cy="1.49626"
              r="1.49626"
              transform="rotate(90 1.49642 1.49626)"
              fill="white"
            ></circle>
            <circle
              cx="40.9984"
              cy="14.6642"
              r="1.49626"
              transform="rotate(90 40.9984 14.6642)"
              fill="white"
            ></circle>
            <circle
              cx="27.8304"
              cy="14.6642"
              r="1.49626"
              transform="rotate(90 27.8304 14.6642)"
              fill="white"
            ></circle>
            <circle
              cx="14.6644"
              cy="14.6642"
              r="1.49626"
              transform="rotate(90 14.6644 14.6642)"
              fill="white"
            ></circle>
            <circle
              cx="1.49642"
              cy="14.6642"
              r="1.49626"
              transform="rotate(90 1.49642 14.6642)"
              fill="white"
            ></circle>
            <circle
              cx="40.9984"
              cy="27.8302"
              r="1.49626"
              transform="rotate(90 40.9984 27.8302)"
              fill="white"
            ></circle>
            <circle
              cx="27.8304"
              cy="27.8302"
              r="1.49626"
              transform="rotate(90 27.8304 27.8302)"
              fill="white"
            ></circle>
            <circle
              cx="14.6644"
              cy="27.8302"
              r="1.49626"
              transform="rotate(90 14.6644 27.8302)"
              fill="white"
            ></circle>
            <circle
              cx="1.49642"
              cy="27.8302"
              r="1.49626"
              transform="rotate(90 1.49642 27.8302)"
              fill="white"
            ></circle>
            <circle
              cx="40.9984"
              cy="40.9982"
              r="1.49626"
              transform="rotate(90 40.9984 40.9982)"
              fill="white"
            ></circle>
            <circle
              cx="27.8304"
              cy="40.9963"
              r="1.49626"
              transform="rotate(90 27.8304 40.9963)"
              fill="white"
            ></circle>
            <circle
              cx="14.6644"
              cy="40.9982"
              r="1.49626"
              transform="rotate(90 14.6644 40.9982)"
              fill="white"
            ></circle>
            <circle
              cx="1.49642"
              cy="40.9963"
              r="1.49626"
              transform="rotate(90 1.49642 40.9963)"
              fill="white"
            ></circle>
            <circle
              cx="40.9984"
              cy="54.1642"
              r="1.49626"
              transform="rotate(90 40.9984 54.1642)"
              fill="white"
            ></circle>
            <circle
              cx="27.8304"
              cy="54.1642"
              r="1.49626"
              transform="rotate(90 27.8304 54.1642)"
              fill="white"
            ></circle>
            <circle
              cx="14.6644"
              cy="54.1642"
              r="1.49626"
              transform="rotate(90 14.6644 54.1642)"
              fill="white"
            ></circle>
            <circle
              cx="1.49642"
              cy="54.1642"
              r="1.49626"
              transform="rotate(90 1.49642 54.1642)"
              fill="white"
            ></circle>
          </g>
        </svg>
      </span>
    </section>
  );
};

export default ProductSearchForm;