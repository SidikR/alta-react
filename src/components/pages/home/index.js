import Layout from "../../global/layout";
import HomeBanner from "./home-banner";
import HomeTestimoni from "./home-testimoni";
import { useEffect, useState } from "react";

export default function Home() {
  const [bannerData, bannerDataSet] = useState({
    title: "New Arrival",
    desc: "Introducing our latest fashion masterpiece, the stunning clothes. Crafted with unparalleled precision and designed to captivate, this extraordinary addition to our collection embodies elegance and modernity.",
  });

  const [testimoniData, testimoniDataSet] = useState([
    {
      name: "John",
      occupation: "Designer",
      message:
        "I like the way that the production clothes from this store is packaged and delivered",
    },
    {
      name: "Soleh",
      occupation: "Designer",
      message:
        "I like the way that the production clothes from this store is packaged and delivered",
    },
    {
      name: "Yazid",
      occupation: "Designer",
      message:
        "I like the way that the production clothes from this store is packaged and delivered",
    },
  ]);

  function handleAddTestimoni() {
    testimoniDataSet((prev) => {
      let sample = [...prev];
      sample.push({
        name: "Yazid",
        occupation: "Frontend",
        message: "testing",
      });
      return sample;
    });
  }

  return (
    <Layout>
      <HomeBanner bannerData={bannerData} />
      <HomeTestimoni
        bannerData={bannerData}
        testimoniData={testimoniData}
        handleAddTestimoni={handleAddTestimoni}
      />
    </Layout>
  );
}
