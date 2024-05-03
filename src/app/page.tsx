'use client'

import Navbar from "@/components/navBar";
import Content from "@/components/content";
import CartContent from "@/components/cartContent";
import { useState } from "react";

export default function Home() {

  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div>
      <Navbar/>
      <Content setCartProducts={setCartProducts} />
      <CartContent cartProductsState={[cartProducts, setCartProducts]} /> 
    </div>

  );
}
