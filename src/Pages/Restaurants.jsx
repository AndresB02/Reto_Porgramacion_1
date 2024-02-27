import React, { useState, useEffect } from "react";

const Restaurante = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.foursquare.com/v2/venues/search?near=United%20States&categoryId=4d4b7105d754a06374d81259&client_id=my-project-2024&client_secret=fsq3nb4+IjYTX1Ix1G7FZtPETx/CyASWTKKbmGMyQbP/GQo=&v=20240226"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRestaurants(data.response.venues);
      } catch (error) {
        console.error("There was a problem fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Restaurantes en Colombia</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurante;
