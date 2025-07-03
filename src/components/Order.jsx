// components/Order.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useOrders } from '../hooks/useOrders';
import OrderCard from './OrderCard';

const Order = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: orders, isLoading, error } = useOrders();

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=orders');
    }
  }, [user, navigate]);

  if (!user) return null; // Prevent flash before redirect
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading orders.</p>;

  return (
    <section className="product" id="orders">
      <h2 className="section-title">Your Orders</h2>
      <div className="products-grid">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default Order;
