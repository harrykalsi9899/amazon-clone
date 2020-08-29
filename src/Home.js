import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG"
        alt=""
      />
      <div className="home__row">
        <Product
          id="111"
          title="Apple iPhone 11 pro (256GB) - Black"
          price={90000}
          rating={5}
          image="https://rukminim1.flixcart.com/image/352/352/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70"
        />
        <Product
          id="222"
          title="IFB 6.5 kg Fully-Automatic Front Loading Washing Machine (Senorita WXS, Double Tone -Chrome/White, Inbuilt Heater)"
          price={40000}
          rating={3}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr0K83ftieQ7WrItvAse4ucLLasPchgRQDL9HaP4bkdEfML6P351ZoOBCk6p9L0DBoyCXnw2S3&usqp=CAc"
        />
      </div>
      <div className="home__row">
        <Product
          id="333"
          title="HP 14q cs2002TU 14-inch Laptop (Celeron N4020/4GB/256GB SSD/Windows 10 Home/Integrated Graphics), Jet Black
          "
          price={35000}
          rating={3}
          image="https://m.media-amazon.com/images/I/71-wF9anccL._AC_UY218_.jpg"
        />
        <Product
          id="444"
          title="Vovalona Smart Multi-Purpose Laptop Table with Dock Stand/Study Table/Bed Table/Foldable and Portable/Ergonomic & Rounded Edges/Non-Slip"
          price={90000}
          rating={5}
          image="https://m.media-amazon.com/images/I/41KQFVZB9SL._AC_UY218_.jpg"
        />
        <Product
          id="555"
          title="Fastrack 35 Ltrs Olive Casual Backpack (A0790NOL01)"
          price={1000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41FpY3XtZvL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="666"
          title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor  Super Ultra Wide Dual WQHD 5120 x 1440, 120Hz, Freesync, Gsync Compatible, HDMI, 2 x Displayport, "
          price={60000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
