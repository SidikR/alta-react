import {
  addProducts,
  addToCart,
  deleteProduct,
} from "src/store/slices/products";
import Layout from "../../global/layout";
import ProductCard from "./product-card";
import Summary from "./summary";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const { data } = useSelector((state) => state?.products);
  const dispatch = useDispatch();

  function onHandleAddCart(id) {    
    dispatch(addToCart(id));
  }
  
  return (
    <Layout>
      <div style={{ minHeight: "100vh" }} className="container py-5">
        <div className="row">
          {data.map((item, i) => (
            <ProductCard
              key={i}
              data={item}
              className="col-lg-3 px-4"
              onHandleAddCart={onHandleAddCart}
            />
          ))}
        </div>
        {/* <Summary summaryList={cart} /> */}
      </div>
    </Layout>
  );
}
