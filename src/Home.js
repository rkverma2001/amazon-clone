import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Gateway/CEPC/Hero/Pendrives/D47074703_IN_PC-BAU-GW-HeroMSO-Storage-devices-Creatives_3000x1200._CB636151077_.jpg"
          alt="amazon"
        />
        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Bussinesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/518-xLG-bjL._SX316_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61FJtVQh9bL._SX679_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Apple Watch SE (GPS, 40mm) - Gold Aluminium Case with Starlight Sport Band - Regular"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71+FrNJ61dL._SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX425_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81+N4PFF7jS._SX679_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX679_.jpg"
          />
        </div>
        <div className="home_row"></div>
        <div className="home_row"></div>
      </div>
    </div>
  );
}

export default Home;
