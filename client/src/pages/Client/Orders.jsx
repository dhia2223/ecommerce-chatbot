import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Client/sections/Navbar';
import { getMyOrders } from '../../services/Client/orderService';
import { PackageSearch, Truck } from 'lucide-react';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();
        setOrders(data);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="bg-third dark:bg-four min-h-screen text-gray-800 dark:text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          <span className="text-primary">My Orders</span>
        </h1>
        {orders.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-300 mt-12">
            <PackageSearch className="w-12 h-12 mx-auto mb-2" />
            You have no orders yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Order #{order.id.slice(0, 8)}</h2>
                  <span className="text-sm text-primary font-medium">{order.status}</span>
                </div>
                <div className="text-sm space-y-1">
                  <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                  <p><strong>Total Items:</strong> {order.items.length}</p>
                  <p><strong>Total Price:</strong> ${order.total.toFixed(2)}</p>
                </div>
                <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-secondary" />
                  Expected delivery in 3-5 business days
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
