import React from 'react';
import { Truck, ShieldCheck, Headset, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping on all orders",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Money Guarantee",
    description: "30 Days Money Back Guarantee",
  },
  {
    icon: <Headset className="w-10 h-10 text-primary" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-primary" />,
    title: "Secure Payment",
    description: "All Cards Accepted",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-four">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {feature.icon}
            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-500 dark:text-gray-300 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
