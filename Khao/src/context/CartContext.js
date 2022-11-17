import React, { createContext, useState } from "react";
import { getProduct } from "../services/ProductsService.js";
import axios from "axios";
import { apiUrl } from "../../helper.js";

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [userID, setUserID] = useState(0);
  const [shopID, setShopID] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  let addItemToCart = async (id) => {
    // const product = getProduct(id);
    let product;
    try {
       product = await (await axios.get(apiUrl + "/single-product/" + id)).data.products[0];
      //  console.log(product);
    } catch (e) {
      console.log(e);
    }
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += product.price;
          }
          return item;
        });
      }
    });
  }
  function clearCart() {
    setItems([]);
  }
  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  const setUser = (id) => {
    setUserID(id);
  }

  const setShop = (id) => {
    setShopID(id);
  }

  
  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        getItemsCount,
        addItemToCart,
        getTotalPrice,
        clearCart,
        userID,
        setUser,
        shopID,
        setShop,
        setUserInfo,
        userInfo
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
