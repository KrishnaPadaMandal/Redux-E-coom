import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css"; 
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../redux/productSlice";
import { useEffect } from "react";

const ProductDetails = () => {

  const productDetails = {
    id: "1",
    title: "Margherita Pizza",
    description:
      "A classic delight with 100% real mozzarella cheese and fresh tomato sauce.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0i0EGsCJflGCTELPoqX2VYidG7iZmigXPXA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMis8GzZpzMrRd8xU9zE8cpD62Xq5qmjEUraCOMaVQNck0cpkAbWpKrryvEYk9vVRszs&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsIwfAyI6z3DGLQtZJ-BoXQaEOFkySTx3AEx_k8PVkujPfXo8TiHPHpIjJiI4knR87gY&usqp=CAU",
    ],
    original_price: 12.99,
    discount_price: 9.99,
  };
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.product);


  useEffect(() => {
    dispatch(fetchProductDetails()); 
  }, [dispatch]);

  console.log("Product detail",data)

  const [selectedImage, setSelectedImage] = useState(productDetails.images[0]);

  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        {/* Zoom container */}
        <Zoom>
          <img src={selectedImage} alt="Product" style={styles.mainImage} />
        </Zoom>
        {/* Thumbnail images */}
        <div style={styles.thumbnailContainer}>
          {productDetails.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              style={{
                ...styles.thumbnail,
                border: selectedImage === img ? "2px solid #e63946" : "none",
              }}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
      <div style={styles.detailsSection}>
        <h1 style={styles.title}>{productDetails.title}</h1>
        <div style={styles.priceContainer}>
          <span style={styles.originalPrice}>
            ${productDetails.original_price.toFixed(2)}
          </span>
          <span style={styles.discountPrice}>
            ${productDetails.discount_price.toFixed(2)}
          </span>
        </div>
        <p style={styles.description}>{productDetails.description}</p>
        <button style={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    gap: "20px",
  },
  imageSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  mainImage: {
    width: "100%",
    maxWidth: "400px", // Keep a maximum width for better layout control
    borderRadius: "10px",
    cursor: "zoom-in",
    objectFit: "contain", // Ensures image fits well within the container
  },
  thumbnailContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "10px", // Adds space between the image and thumbnails
  },
  thumbnail: {
    width: "60px",
    height: "60px",
    borderRadius: "8px",
    cursor: "pointer",
    objectFit: "cover",
  },
  detailsSection: {
    flex: 1,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  priceContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "10px",
  },
  originalPrice: {
    textDecoration: "line-through",
    color: "#888",
  },
  discountPrice: {
    color: "#e63946",
    fontWeight: "bold",
    fontSize: "18px",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  addToCartButton: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#e63946",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default ProductDetails;
