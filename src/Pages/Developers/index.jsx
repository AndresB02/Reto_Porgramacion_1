import React from "react";
import Slider from "react-slick"; //crear carrusel funcional
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Developers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    sliteToShow: 3,
    slideToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
  };
  return (
    <>
      <div>
        <h1 className="bg-blue-200 my-10"></h1>
      </div>
      <div className="w-auto m-auto bg-transparent shadow-2xl pb-0 pt-10">
        <div className="mt-30 ">
          <Slider {...settings}>
            {/* iterar sobre la matriz de datos para
          crear diapositiva para cada elemento */}
            {data.map((d) => (
              <div key={d.name}>
                <div className=" w-2/6 h-auto text-black rounded-xl py-8 m-auto shadow-2xl border">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-60 w-60 rounded-md bg-white flex-initial m-auto cursor-pointer"
                    onClick={() => window.open(d.link, "_blank")}
                  />
                </div>
                <div className="flex flex-col item-center gap-5 p-5 text-pretty pl-20 pr-20 ">
                  <p
                    className="text-x1 font-semibold text-sky-700 cursor-pointer"
                    onClick={() => window.open(d.map, "_blank")}
                  >
                    {d.name}
                  </p>
                  <p className="text-center"> {d.review} </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: "Cantina la 15",
    img: "./src/assets/Photos/cantina.jpg",
    map: "https://maps.app.goo.gl/GCv4M6a5EYgmvs5j6",
    link: "https://www.cantinala15.com/",
    review:
      "Cantina La 15 es un lugar que te transporta a México, en un ambiente sorprendente con música en vivo, baile, fuego, personajes temáticos, gastronomía de calidad y fiesta todos los días",
  },
  {
    name: "Frenessi",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/21/ea/2a/61/frenessi.jpg",
    map: "https://maps.app.goo.gl/bidxp4ePg2gwEdJQA",
    link: "https://www.frenessi.co/home",
    review:
      "Prepárate para que tus ojos saboreen la meta gastronomía que los sabores del futuro impregnen tus sentidos Deja atrás de los espejos... Cualquier atadura. Deja que tu mente desprenda los pies del suelo y viaje sobre todo lo que es posible ... y lo que no. Esta es la última realidad multisensorial",
  },
  {
    name: "La Cabrera Bogotá l Parrilla Argentina",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOxbnARHQKQJ_oKHlRVGSnB9U2LT7FTfyc27OxuKaXA&s",
    map: "https://maps.app.goo.gl/MA1CGb3Y8QBqSPb3A",
    link: "https://la-cabrera.com/",
    review:
      "La Cabrera es una casa de carnes argentina que rinde homenaje a la tradición culinaria de la familia argentina y la cultura del Río de la Plata. Ofrecen una experiencia gastronómica única, cuidando cada detalle desde la llegada hasta la salida, involucrando a los sentidos con sus aromas y sabores ",
  },
  {
    name: "Isla Morada",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0qGePbQCKmkDHSWfPxEofnMWE73dMuXwhPbwQSKQ9g&s",
    map: "https://maps.app.goo.gl/oAVErmYQSxdFnvk47",
    link: "https://islamorada.com.co/",
    review:
      "Nos encanta la buena comida. Por eso nos hemos esforzado para traerte una extraordinaria carta de platos deliciosos, cocinados todos los días con los mejores ingredientes. ",
  },
  {
    name: "La Granja",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEAe8On0qdAmZeo4eIaH1bqyT-_nMtxK9pyFlnVGU9dA&s",
    map: "https://maps.app.goo.gl/eXuf6G19Z8jKVEz6A",
    link: "https://restaurantelagranja.co/",
    review:
      "En La Granja Tenjo, existe un ingreso seguro, responsable y divertido",
  },
];
