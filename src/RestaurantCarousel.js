import React from "react";
import { Carousel } from "react-bootstrap";

export default function RestaurantCarousel({ restaurant }) {
  return (
    restaurant && (
      <div>
        <Carousel>
          {restaurant.images.map((item) => (
            <Carousel.Item key={item.name}>
              <img
                className="d-block  img-fluid"
                style={{ maxHeight: "50vh" }}
                src={item.img_link}
                alt={item.name}
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.about}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
  );
}
