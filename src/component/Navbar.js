import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importing the cart icon

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#282c34',
    padding: '10px 20px',
    color: '#fff',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '15px',
    position: 'relative',
  };

  const countStyle = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  return (
    <div style={navbarStyle}>
      <div style={logoStyle}>MyShop</div>
      <div style={navLinksStyle}>
        <Link to="/product" style={linkStyle}>
          Product
        </Link>
        <div style={{ position: 'relative' }}>
          <a
            href="#cart"
            style={{ ...linkStyle, display: 'flex', alignItems: 'center' }}
            onMouseOver={(e) => (e.target.style.color = '#61dafb')}
            onMouseOut={(e) => (e.target.style.color = '#fff')}
          >
            <FaShoppingCart size={20} style={{ marginRight: '5px' }} /> 
           
          </a>
          <span style={countStyle}>3</span> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
