import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12345"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
          <Product
            id="12346"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://media.nisbets.com/asset/core/prodimage/largezoom/de032_(1).jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12347"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000214183_sa.jpg"
          />
          <Product
            id="12348"
            title="Amazon Echo (3rd generation) | Smart speaker wiith Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://www.bhphotovideo.com/images/images2500x2500/amazon_b07nftvp7p_echo_3rd_generation_charcoal_1512895.jpg"
          />
          <Product
            id="12349"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="12347"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81jiUqRKBcL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
