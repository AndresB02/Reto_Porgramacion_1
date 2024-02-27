import React, { useState, useEffect } from "react";
import axios from "axios";
import Restaurante from "../Restaurants";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  /* Renderizar cuando se usa el componente funcional Table */
  const data = [
    {
      name: "Cantina la 15",
      img: "./src/assets/Photos/cantina.jpg",
      review:
        "Cantina La 15 es un lugar que te transporta a México, en un ambiente sorprendente con música en vivo, baile, fuego, personajes temáticos, gastronomía de calidad y fiesta todos los días",
    },
    {
      name: "Frenessi",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/21/ea/2a/61/frenessi.jpg",
      review:
        "Prepárate para que tus ojos saboreen la meta gastronomía que los sabores del futuro impregnen tus sentidos Deja atrás de los espejos... Cualquier atadura. Deja que tu mente desprenda los pies del suelo y viaje sobre todo lo que es posible ... y lo que no. Esta es la última realidad multisensorial",
    },
    {
      name: "La Cabrera Bogotá l Parrilla Argentina",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOxbnARHQKQJ_oKHlRVGSnB9U2LT7FTfyc27OxuKaXA&s",
      review:
        "La Cabrera es una casa de carnes argentina que rinde homenaje a la tradición culinaria de la familia argentina y la cultura del Río de la Plata. Ofrecen una experiencia gastronómica única, cuidando cada detalle desde la llegada hasta la salida, involucrando a los sentidos con sus aromas y sabores ",
    },
    {
      name: "Isla Morada",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0qGePbQCKmkDHSWfPxEofnMWE73dMuXwhPbwQSKQ9g&s",
      review:
        "Nos encanta la buena comida. Por eso nos hemos esforzado para traerte una extraordinaria carta de platos deliciosos, cocinados todos los días con los mejores ingredientes. ",
    },
    {
      name: "La Granja",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEAe8On0qdAmZeo4eIaH1bqyT-_nMtxK9pyFlnVGU9dA&s",
      review:
        "En La Granja Tenjo, existe un ingreso seguro, responsable y divertido, y nuestro credo es: Luces de sabores, para paladares de colores ",
    },
  ];

  useEffect(() => {
    // Función para obtener datos de Foursquare API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.foursquare.com/v2/venues/search?client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&v=20220201&near=YOUR_LOCATION&query=${searchTerm}`
        );
        setVenues(response.data.response.venues);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Llamar a la función para obtener datos cuando searchTerm cambie
    if (searchTerm !== "") {
      fetchData();
    }
  }, [searchTerm]);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre de restaurante"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className=" mb-4 p-2 border rounded flex my-5"
      />
      <table className="table-auto w-full ">
        {/* <caption className="pb-2 text-xl font-bold">My favorite Dev's</caption> */}
        <thead>
          <tr className="bg-violet-400 px-4 py-2">
            <th className="px-2 py-2"> Nombre del Restaurante </th>
            {/* <th className="px-2 py-2"> Redes Sociales </th> */}
            <th className="px-2 py-2"> Reseña </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={(row.id, index)}>
              <td className="border">{row.name}</td>
              {/* <td className="border">{row.img}</td> */}
              <td className="border">{row.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Restaurante />
    </div>
  );
};

export default Projects;
