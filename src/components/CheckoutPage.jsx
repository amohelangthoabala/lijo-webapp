import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useOrder } from '../hooks/useOrder';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const mutation = useOrder();

  const [type, setType] = useState('delivery');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      type,
      delivery_address: type === 'delivery' ? deliveryAddress : null,
      items: cart.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
        variant: item.variant || null,
      })),
    };

    mutation.mutate(payload, {
      onSuccess: () => {
        clearCart();
        alert('✅ Order placed successfully!');
        navigate('/');
      },
      onError: (error) => {
        console.error(error);
        alert('❌ Failed to place order. Please try again.');
      },
    });
  };

  if (cart.length === 0) {
    return (
      <section className="checkout" style={{ padding: '2rem' }}>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="checkout" style={{ padding: '100px 30px' }}>
      <h2 className="section-title">Checkout</h2>
      <p className="section-text">Review your items and complete your order.</p>

      <div className="checkout-container" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Order Summary */}
        <div style={{ flex: 1 }}>
          <h3>Order Summary</h3>
          <ul style={{ padding: 0, listStyle: 'none' }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  borderBottom: '1px solid #eee',
                  paddingBottom: '1rem',
                }}
              >
                <div style={{ width: 64, height: 64, marginRight: '1rem' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <strong>{item.name}</strong>
                  <p style={{ margin: 0 }}>
                    LSL {item.price} × {item.quantity}
                  </p>
                </div>
                <div style={{ fontWeight: 'bold' }}>
                  LSL {(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: LSL {total}</h3>
        </div>

        {/* Checkout Form */}
        <div style={{ flex: 1 }}>
          <h3>Order Type</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label>
                <input
                  type="radio"
                  value="pickup"
                  checked={type === 'pickup'}
                  onChange={(e) => setType(e.target.value)}
                />{' '}
                Pickup
              </label>
              {'  '}
              <label>
                <input
                  type="radio"
                  value="delivery"
                  checked={type === 'delivery'}
                  onChange={(e) => setType(e.target.value)}
                />{' '}
                Delivery
              </label>
            </div>

            {type === 'delivery' && (
              <textarea
                name="delivery_address"
                placeholder="Delivery Address"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                required
                className="input"
                style={{ minHeight: '100px' }}
              />
            )}

            <button className="btn btn-primary" type="submit" disabled={mutation.isLoading}>
              {mutation.isLoading ? 'Placing Order...' : 'Place Order'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
