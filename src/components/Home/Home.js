import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product.js";
import db from "../../firebase";
import {
  doc,
  query,
  collection,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

function Home() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "products"));
    onSnapshot(q, (snapshot) => {
      setProd(snapshot.docs.map((doc) => ({ data: doc.data() })));
    });
  }, []);

  const products = prod
    .map(({ data }) => (
      <Product
        id={data.id}
        title={data.title}
        price={data.price}
        rating={data.rating}
        image={data.image}
      />
    ))
    .reduce(function (r, element, index) {
      // create element groups with size 3, result looks like:
      // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
      index % 3 === 0 && r.push([]);
      r[r.length - 1].push(element);
      return r;
    }, [])
    .map(function (rowContent) {
      // surround every group with 'row'
      return <div className="home_row">{rowContent}</div>;
    });

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {prod && products}
      </div>
    </div>
  );
}

export default Home;
