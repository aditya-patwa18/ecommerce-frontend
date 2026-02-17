import React, { createContext, useState, useEffect } from "react";

export const Shopcontext = createContext(null);

const Shopcontextprovider = (props) => {

  const [all_product, setAllProduct] = useState([]);
  const [cartitems, setcartitems] = useState({});

  // ================= FETCH PRODUCTS FROM RENDER =================
  useEffect(() => {
    fetch("https://ecommerce-backend-xmia.onrender.com/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);

        let cart = {};
        for (let i = 0; i < data.length; i++) {
          cart[data[i].id] = 0;
        }
        setcartitems(cart);
      });
  }, []);

  const addtocart = (itemId) => {
    setcartitems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1
    }));
  }

  const removetocart = (itemId) => {
    setcartitems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1
    }));
  }

  const totalamount = () => {
    let total = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = all_product.find((p) => p.id === Number(item));
        if (iteminfo) {
          total += iteminfo.new_price * cartitems[item];
        }
      }
    }
    return total;
  };

  const totalcartitems = () => {
    let total = 0;
    for (const item in cartitems) {
      total += cartitems[item];
    }
    return total;
  }

  const contextvalue = {
    totalcartitems,
    totalamount,
    all_product,
    cartitems,
    addtocart,
    removetocart
  };

  return (
    <Shopcontext.Provider value={contextvalue}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default Shopcontextprovider;
