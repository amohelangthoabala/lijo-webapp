import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Snackbar, Alert, Select, MenuItem } from '@mui/material';
import client from '../api/client';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    client.get(`/products/${id}`).then((res) => {
      setProduct(res.data.data);
      if (res.data.data.variants.length) {
        setSelectedVariant(res.data.data.variants[0]);
      }
      if (res.data.data.images.length) {
        setActiveImage(res.data.data.images[0]);
      }
    });
  }, [id]);

  if (!product) return <p style={{ textAlign: 'center', marginTop: '120px' }}>Loading...</p>;

  const basePrice = parseFloat(product.base_price);
  const variantPrice = selectedVariant ? parseFloat(selectedVariant.price) : 0;
  const totalPrice = (basePrice + variantPrice).toFixed(2);
  const isMobile = window.innerWidth < 768;

  const handleAddToCart = () => {
    onAddToCart?.({
      id: product.id,
      name: product.name,
      image: activeImage,
      price: totalPrice,
      quantity: 1,
      restaurant_id: product.restaurant.id,
      variant: selectedVariant ? selectedVariant.name : null,
    });

    setOpen(true);
    const sound = new Audio('/sounds/add-to-cart.mp3');
    sound.play();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '1.5rem',
        padding: '120px 20px 90px',
        alignItems: 'center',
        maxWidth: '900px',
        margin: 'auto',
      }}
    >
      {/* Image + Thumbnails */}
      <div style={{ flex: 1, width: '100%', textAlign: 'center' }}>
        <img
          src={activeImage}
          alt={product.name}
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            objectFit: 'cover',
            marginBottom: '1rem',
          }}
        />

        {product.images.length > 1 && (
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setActiveImage(img)}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: activeImage === img ? '2px solid #e9c46a' : '2px solid transparent',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Details Right */}
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 600 }}>{product.name}</h3>
        <p style={{ margin: '1rem 0', color: '#4a4a4a' }}>{product.description}</p>

        {product.variants.length > 0 && (
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
              Select Variant:
            </label>
            <Select
              fullWidth
              value={selectedVariant?.id || ''}
              onChange={(e) => {
                const variant = product.variants.find((v) => v.id === parseInt(e.target.value, 10));
                setSelectedVariant(variant);
              }}
              size="small"
            >
              {product.variants.map((variant) => (
                <MenuItem key={variant.id} value={variant.id}>
                  {variant.name} {parseFloat(variant.price) > 0 ? `(+ LSL ${variant.price})` : ''}
                </MenuItem>
              ))}
            </Select>
          </div>
        )}

        <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#e9c46a' }}>
          {totalPrice} <span style={{ fontSize: '1rem', color: '#2b2d42' }}>LSL</span>
        </div>

        <button
          className="btn btn-primary"
          style={{
            width: '100%',
            height: '48px',
            backgroundColor: '#e9c46a',
            color: '#2b2d42',
            fontWeight: 700,
            fontSize: '1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Added to Cart!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProductDetails;