import React from "react";
import { Card } from "react-bootstrap";
import RestaurantCarousel from "./RestaurantCarousel";
import CheckOut from "./CheckOut";

export default function MenuItem({ dish }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{dish.name}</Card.Title>
          <Card.Subtitle className="float-left">
            $&nbsp;{dish.price}
          </Card.Subtitle>
          <br />
          <Card.Text>{dish.description}</Card.Text>
          <hr />
          <div className="d-flex justify-content-center">
            <RestaurantCarousel images={dish.images} />
          </div>
          <div className="my-3">
            <CheckOut className="float-right" />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
