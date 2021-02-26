import React, { useState, useEffect } from "react";
import { Card, Alert } from "react-bootstrap";
import RestaurantCarousel from "./RestaurantCarousel";
import CheckOut from "./CheckOut";

export default function WelcomeCard() {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({ name: "Erick Pacheco" });
  }, []);
  const [restaurant, setRestaurantOpen] = useState({
    id: 9999,
    name: "Lupitas Restaurant",
    open_hours: "10 PM - 11 PM",
    food_type: "Mexican",
    address: {
      street: "123 Hourse st",
      apt: 4,
      city: "Boston",
      state: "MA",
      zip: "0333332",
    },

    images: [
      {
        name: "Dish one",
        about: "We got food",
        img_link:
          "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2018/10/Terra-Jim-Brueckner.jpg",
      },
      {
        name: "Dish two",
        about: "some other image",
        img_link:
          "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/11/14/0/FN_healthy-fast-food-applebees-steak_s4x3.jpg.rend.hgtvcom.441.331.suffix/1510694267044.jpeg",
      },
      {
        name: "Dish three",
        about: "another image?",
        img_link:
          "https://cdn.vox-cdn.com/thumbor/8hfV7puK-JAMl_SIIV-HjJeyh1U=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19860867/91698134_10101489731717528_8232053826425716736_o.jpg",
      },
    ],
  });

  return (
    <div className="container mt-2">
      <Alert variant="light">
        {user ? `Welcome, ${user.name}` : <a href="/login">Log In</a>}
      </Alert>

      <Card>
        <Card.Body>
          <Card.Title>{restaurant ? `${restaurant.name}` : ""}</Card.Title>
          <Card.Text>
            {restaurant.address.city + ": " + restaurant.open_hours}
          </Card.Text>
          <hr />
          <div className="d-flex justify-content-center">
            <RestaurantCarousel restaurant={restaurant} />
          </div>
          <div className="container mt-3">
            <CheckOut />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
