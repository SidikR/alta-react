import Layout from "../../global/layout";
import ProductCard from "./product-card";
import bagImg from "../../../assets/img/bag.jpg";
import Summary from "./summary";
import { useState } from "react";

const listProducts = [
  {
    id: 1,
    img: bagImg,
    title: "Casual Bag",
    price: 785000,
  },
  {
    id: 2,
    img: bagImg,
    title: "Pink Bag",
    price: 240000,
  },
  {
    id: 3,
    img: bagImg,
    title: "Yellow Bag",
    price: 125000,
  },
  {
    id: 4,
    img: bagImg,
    title: "Green Bag",
    price: 664000,
  },
];

export default function Products() {
  const [cart, cartSet] = useState([]);

  function onHandleAddCart(item) {
    const findSameId = [...cart].findIndex((i) => i?.id === item?.id); // find index if id inside cart is the same as index at item

    if (findSameId !== -1) {  // check if findSameId have some index     
      // manipulate qty to be multiply because it has id inside cart before
      cartSet((prev) => {
        let sample = [...prev];        
        sample[findSameId].qty += 1 // sample[findSameId].qty = sample[findSameId].qty + 1
        sample[findSameId].price += item?.price
        return sample;
      } )
    } else {
      // set new product to cart because theres no id inside the cart before
      cartSet((prev) => {
        let sample = [...prev];
        sample.push({
          id: item?.id,
          title: item?.title,
          price: item?.price,
          qty: 1,
        });
        return sample;
      });
    }    
  }

  console.log(cart);
  return (
    <Layout>
      <div style={{ minHeight: "100vh" }} className="container py-5">
        <div className="row">
          {listProducts.map((item, i) => (
            <ProductCard
              key={i}
              data={item}
              className="col-lg-3 px-4"
              onHandleAddCart={onHandleAddCart}
            />
          ))}
        </div>

        <Summary summaryList={cart} />
      </div>
    </Layout>
  );
}
