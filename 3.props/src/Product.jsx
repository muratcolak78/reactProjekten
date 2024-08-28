import React from "react";

function Product({ productName, productPreis }) {
  return (
    <div>
      <div>Ürün Bilgileri </div>
      <div>
        <div>isim: {productName}</div>
        <div>fiyat:{productPreis}</div>
      </div>
    </div>
  );
}

export default Product;
