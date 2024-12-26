import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/productSlice';


import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const { data: productData = [], loading, error } = useSelector((state) => state.product || {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    if (productData) {
      console.log('Product data:', productData);
    }
  }, [productData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleProductClick = (productId) => {
    navigate(`/product-details/${productId}`);
  }

  return (
 
    
    <div style={styles.container}>{}
      {
      
      productData?.map((product) => (
        <div
          key={product.id}
          style={{
            ...styles.card,
            backgroundColor: hoveredProductId === product.id ? '#f0f0f0' : '#fff',
            borderColor: hoveredProductId === product.id ? '#e63946' : '#ccc',
          }}
          onMouseEnter={() => setHoveredProductId(product.id)}
          onMouseLeave={() => setHoveredProductId(null)}
          onClick={()=>handleProductClick(product.id)}
        >
          <div style={styles.imageContainer}>
            <img
              src={product.images?.[0] || 'https://via.placeholder.com/150'} // Placeholder if no image
              alt={product.title || 'No Title'}
              style={styles.image}
            />
            {hoveredProductId === product.id && (
              <div style={styles.descriptionOverlay}>
                <p>{product.description || 'No description available.'}</p>
              </div>
            )}
          </div>
          <h2 style={styles.title}>{product.title || 'Untitled Product'}</h2>
          <div style={styles.priceContainer}>
            <span style={styles.originalPrice}>
              ${product.original_price?.toFixed(2) || '0.00'}
            </span>
            <span style={styles.discountPrice}>
              ${product.discount_price?.toFixed(2) || '0.00'}
            </span>
          </div>
        </div>
      ))}


    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    transition: 'transform 0.3s ease',
  },
  descriptionOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    padding: '10px',
    borderRadius: '8px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
  },
  priceContainer: {
    marginTop: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  originalPrice: {
    textDecoration: 'line-through',
    color: '#888',
  },
  discountPrice: {
    color: '#e63946',
    fontWeight: 'bold',
  },
};

export default Product;
