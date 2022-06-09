import React from "react";
import "./Home.css";
import Product from "./Product";
import Foooter from "./Foooter";
function Home() {
  return (
    <div className="home" id="#homee">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71QuUk6VrwL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={11}
            thousandSeparator={true}
            title="SAMSUNG Galaxy S20 Ultra (Cosmic Gray, 128 GB) (12 GB RAM)"
            price={97999}
            image="https://rukminim1.flixcart.com/image/416/416/k6mibgw0/mobile/j/z/b/samsung-galaxy-s20-ultra-sm-g988bzapinu-original-imafpfkb6mkgyegk.jpeg?q=70"
            rating={5}
          />
          <Product
            id={1}
            title="ASUS ROG 5s (Phantom Black, 128 GB) (8 GB RAM)"
            price={49999}
            image="https://rukminim1.flixcart.com/image/416/416/ky7lci80/mobile/t/x/j/-original-imagahvge92r5fmm.jpeg?q=70"
            rating={4}
          />
          <Product
            id={1}
            title="Mi 11T Pro (Celestial Magic, 256 GB)  (8 GB RAM)"
            price={42999}
            image="https://rukminim1.flixcart.com/image/416/416/kynb6vk0/mobile/s/5/g/11t-pro-5g-11t-mi-original-imagatzzzpffbhgb.jpeg?q=70"
            rating={4}
          />
          <Product
            id={2}
            title="APPLE iPhone 13 Pro Max (Sierra Blue, 512 GB)"
            price={145999}
            image="https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/r/m/8/iphone-13-pro-max-mllj3hn-a-apple-original-imag6vpgphrzuffg.jpeg?q=70"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="APPLE Airpods Max Bluetooth Headset  (Space Grey, On the Ear)"
            price={59900}
            image="https://rukminim1.flixcart.com/image/416/416/kigbjbk0-0/headphone/1/w/h/mgym3hn-a-apple-original-imafy8wc5tej8szy.jpeg?q=70"
            rating={5}
          />
          <Product
            id="4"
            title="JBL Flip Essential IPX7 Waterproof 16 W Bluetooth Speaker  (Grey, Stereo Channel)"
            price={99}
            image="https://rukminim1.flixcart.com/image/416/416/k4x2du80/speaker/mobile-tablet-speaker/c/z/f/jbl-flip-essential-original-imafnpuhahqwvwhw.jpeg?q=70"
            rating={5}
          />
          <Product
            id="5"
            title="OnePlus Bullets Wireless Z Bass Edition Bluetooth Headset  (Reverb Red, In the Ear)"
            price={1999}
            image="https://rukminim1.flixcart.com/image/416/416/kg8avm80-0/headphone/2/p/r/e304a-oneplus-original-imafwgkvchwhf63s.jpeg?q=70"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="SONY X74 Bravia 125.7 cms (50 inch) Ultra HD (4K) LED Smart Android TV  (KD-50X74)"
            price={62999}
            image="https://rukminim1.flixcart.com/image/416/416/ks4yz680/television/j/v/c/kd-50x74-sony-original-imag5sy47wghxaue.jpeg?q=70"
            rating={5}
          />
          <Product
            id="7"
            title="LG Nanocell 108 cm (43 inch) Ultra HD (4K) LED Smart TV  (43NANO73TPZ)"
            price={46999}
            image="https://rukminim1.flixcart.com/image/416/416/kqse07k0/television/z/a/z/43nano73tpz-43nano73tpz-lg-original-imag4q3xcjfyhacx.jpeg?q=70"
            rating={4}
          />
        </div>
        <Foooter />
      </div>
    </div>
  );
}

export default Home;
