import React from "react";
import { ProductMainContainer } from "./style";
import { HeaderUserPage } from "../../components/Header";

const ProductPage = () => {
  return (
    <ProductMainContainer>
      <HeaderUserPage />
      <figure>
        <img
          src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
          alt="car image"
        />
      </figure>
      <section>
        <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h2>
      </section>
      <div>
        <span>2013</span>
        <span>45.900 KM</span>
        <div>
          <span>R$00.0000.00</span>
        </div>
      </div>
      <button>Comprar</button>
    </ProductMainContainer>
  );
};

export default ProductPage;
