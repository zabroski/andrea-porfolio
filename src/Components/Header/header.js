// import React from "react";
// import { NavLink } from "react-router-dom";
// // import styles from './Header.module.css';

// // import Jump from "../../assets/jump.PNG";
// import "./header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logoWrapper">
//           {/* <img src={Jump} alt='logo' className="logo" /> */}
//           <span className="brandName">Andrea</span>
//         </div>
//         <nav className="nav">
//           <NavLink
//             to="/"
//             className={({ isActive }) => `navLink${isActive ? " active" : ""}`}
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/work"
//             className={({ isActive }) => `navLink${isActive ? " active" : ""}`}
//           >
//             Work
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) => `navLink${isActive ? " active" : ""}`}
//           >
//             Contact
//           </NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "About" },
    { to: "/work", label: "Work" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="header-container">
        {/* Logo */}
        <motion.div
          className="logoWrapper"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="brandName">Andrea</span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className={`nav ${menuOpen ? "open" : ""}`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5,
              },
            },
          }}
        >
          {navLinks.map(({ to, label }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <NavLink
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navLink${isActive ? " active" : ""}`
                }
              >
                {label}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>

        {/* Hamburger Menu */}
        <motion.div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </div>

      {/* Mobile Nav Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={label}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navLink${isActive ? " active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
