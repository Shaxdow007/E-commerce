import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  // store the api in variable (usestate)
  const [listeProducts, setListeProducts] = useState([]);
  // display products
  const displayProducts = () => {
    if (listeProducts.length > 0) {
      return listeProducts.map((item, index) => (
        <SingleProduct key={index} product={item} />
      ));
    } else {
      return (
        <div className="capitalize text-red-600 text-2xl text-center">
          <strong>there is no products try next time</strong>
        </div>
      );
    }
  };
  // filter products
  const filterProducts = (para) => {
    const filtred = listeProducts.filter((item) => {
      return item.category.include(para);
    });
    if (filtred.length > 0) {
      return filtred.map((item, index) => (
        <SingleProduct key={index} product={item} />
      ));
    } else {
      <div className="capitalize text-red-600 text-2xl text-center">
        <strong>there is no products in this categorie </strong>
      </div>;
    }
  };
  // call the api
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setListeProducts(data));
    // console.log(listeProducts);
  };
  useEffect(() => {
    getProducts();
  });

  return (
    <section className="mb-12" id="product">
      <div className="container mx-auto p-6">
        <div className="capitalize">
          <h2 className="font-semibold text-4xl">Our Produits</h2>
          {/* boxs */}
          <div className="produits">
            {/* categories */}
            <div className="py-3 flex justify-end items-center gap-4 flex-wrap">
              <button
                onClick={() => filterProducts("men's clothing")}
                className="capitalize border-2 border-zinc-500 md:px-4 px-6  py-2 rounded-lg hover:bg-zinc-500 hover:text-white duration-300 ease-in"
              >
                men's clothing
              </button>
              <button
                onClick={() => filterProducts("jewelery")}
                className="capitalize border-2 border-zinc-500 md:px-4 px-6  py-2 rounded-lg hover:bg-zinc-500 hover:text-white duration-300 ease-in"
              >
                jewelery
              </button>
              <button
                onClick={() => filterProducts("electronics")}
                className="capitalize border-2 border-zinc-500 md:px-4 px-6  py-2 rounded-lg hover:bg-zinc-500 hover:text-white duration-300 ease-in"
              >
                electronics
              </button>
              <button
                onClick={() => filterProducts("women's clothing")}
                className="capitalize border-2 border-zinc-500 md:px-4 px-6  py-2 rounded-lg hover:bg-zinc-500 hover:text-white duration-300 ease-in"
              >
                women's clothing
              </button>
            </div>
            {/* display liste products */}
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {displayProducts()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
