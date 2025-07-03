import { useEffect } from 'react';
import echo from '../utils/echo';

const OrderCard = ({ order }) => {
  useEffect(() => {
    const channel = echo.channel('orders');

    channel.listen('OrderStatusUpdated', (e) => {
      console.log('Order updated:', e);
    });

    return () => {
      channel.stopListening('OrderStatusUpdated');
    };
  }, []);

  return (
    <div className="product-card">
      <h3 className="product-name">Order #{order.id}</h3>
      <p className="product-text">Status: {order.status}</p>
      <p className="product-text">Delivery: {order.delivery_address}</p>

      <div style={{ marginTop: '1rem' }}>
        {order.items?.map((item, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <strong>{item.product?.name || 'Product'}</strong>
            {item.variant && <span> — {item.variant}</span>}
            <div style={{ fontSize: '0.9rem', color: '#555' }}>
              {item.quantity} × {item.price} LSL
            </div>
            <div style={{ fontWeight: '500' }}>
              Subtotal: {(item.price * item.quantity).toFixed(2)} LSL
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
        Order Total: {order.total.toFixed(2)} LSL
      </div>
    </div>
  );
};

export default OrderCard;
