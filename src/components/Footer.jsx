// // import React from "react";

// // function Footer() {
// //   return (
// //     <div className="footer-container">
// //       <p>&copy; 2024 All rights reserved</p>
// //     </div>
// //   );
// // }

// // export default Footer;

// import React from "react";

// function Footer() {
//   return (
//     <div className="footer-container">
//       <div className="footer-content">
//         <p>&copy; 2024 All rights reserved</p>
//         <p>
//           <a href="mailto:info@example.com">Contact us</a> |
//           <a href="/about">About Us</a> |<a href="/services">Services</a> |
//           <a href="/contact">Contact</a>
//         </p>
//         <p>
//           Follow us:
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer">
//             Facebook
//           </a>{" "}
//           |
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer">
//             Twitter
//           </a>{" "}
//           |
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer">
//             Instagram
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 All rights reserved</p>
        <p>
          <a href="mailto:info@example.com">Contact us</a> |
          <a href="/about">About Us</a> |<a href="/services">Services</a> |
          <a href="/contact">Contact</a>
        </p>
        <p>
          Follow us:
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>{" "}
          |
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>{" "}
          |
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
