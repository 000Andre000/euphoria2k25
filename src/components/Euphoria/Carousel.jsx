import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import "./Carousel.css";
import { categoryBG } from '../../assets';

export default function Carousel({ sports, category, key }) {
  const navigate = useNavigate();

  const handleClick = (eventName) => {
    const eventId = eventName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');

    navigate(`/events/${key}/${eventId}`);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-header">
        <img
          src={categoryBG}
          alt="background for categories"
          className="category"
        />
        <p className="category-names">{category}</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        {sports.map((sport, index) => (
          <SwiperSlide key={index}>
            <div
              className="sport-slide"
              onClick={() => handleClick(sport)}
            >
              {sport}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
