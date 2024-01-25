// Carousel.js
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledCarouselContainer = styled.div`
  max-width: 100%;
  width: 100%;
  height: 70vh; /* Adjust the height as needed */
  overflow: hidden;
  margin: auto;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 30vh; /* Adjust the height for mobile screens */
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "/images/b.png", // replace with your actual image paths
    "/images/a.png",
    "/images/c.png",
  ];

  return (
    <StyledCarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <StyledImage src={image} alt={`slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </StyledCarouselContainer>
  );
};

export default Carousel;
