import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icon pack

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-gray-800 bg-opacity-60 rounded-full hover:bg-opacity-90 transition"
    onClick={onClick}
  >
    <ChevronRight className="text-white w-6 h-6" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-gray-800 bg-opacity-60 rounded-full hover:bg-opacity-90 transition"
    onClick={onClick}
  >
    <ChevronLeft className="text-white w-6 h-6" />
  </div>
);

const ProductCarousel = ({ images = [] }) => {
  if (images.length === 0) return null;

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full max-w-xl mx-auto relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-4"
          >
            <img
              src={img}
              alt={`Product ${index}`}
              className="rounded-xl shadow-md object-contain max-h-[450px] w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
