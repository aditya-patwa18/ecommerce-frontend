import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { Shopcontext } from '../../Context/Shopcontext';

const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const { cartitems } = useContext(Shopcontext);

  // Function to calculate total items in cart
  const totalcartitems = () => {
    return Object.values(cartitems).reduce((total, qty) => total + qty, 0);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>Shopsy</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setmenu("shop")}>
          <Link to={'/'}>Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setmenu("men")}>
          <Link to={'/men'}>Men</Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setmenu("women")}>
          <Link to={'/women'}>Women</Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setmenu("kids")}>
          <Link to={'/kids'}>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') 
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/login'); }}>Logout</button> 
          : <Link to={'/signup'}><button>SignUp</button></Link>
        }
        <Link to={'/cart'}>
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="navcart-count">{totalcartitems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
