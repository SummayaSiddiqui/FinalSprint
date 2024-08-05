// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/cart">Cart</Link>
//         </li>
//         <li>
//           <Link to="/checkout">Checkout</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/checkout">
            <i className="fas fa-credit-card"></i>
            <span>Checkout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
