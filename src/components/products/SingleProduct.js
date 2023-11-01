import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
const SingleProduct = ({ product }) => {
  return (
    // box products
    <div className="bg-white p-6 my-auto">
      {/* box image */}
      <div className="mx-auto w-5/6">
        <img src={product.image} alt={product.title} width={200} />
      </div>
      {/* product details */}
      <div className="mt-3">
        <h4 className="font-medium">{product.title}</h4>
        <p className="capitalize text-zinc-400 my-2">
          {product.category} categorie
        </p>
        <div className="capitalize text-yellow-500 my-2 flex items-center gap-1">
          <div>{product.rating.rate}</div>
          <div>
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <span className="font-extrabold">${product.price}</span>
      </div>
    </div>
  );
};

export default SingleProduct;
