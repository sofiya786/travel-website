import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description:"Diverse range of experiences,from exploring scenics rivers and lakes to crising along the atlantic and pacific oceans..",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "Taj Mahal is a breathtaking experience,taking visitors to one of the most iconic monuments in the world.Located in Agra,India.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
    "Underwater travel in the U.S. offers unique and captivating experiences, allowing divers and explorers to immerse themselves in vibrant marine ecosystems, submerged landscapes, and even underwater museums. Whether through snorkeling, scuba diving, or submarines, there are numerous underwater destinations across the country.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "A trip from the USA to Sydney, Australia offers a blend of vibrant city life, stunning natural landscapes, and rich cultural experiences. Sydney is one of the most famous cities in the world, known for its iconic landmarks, beaches, and outdoor adventures.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
    "Traveling to Los Angeles (L.A.), USA, offers visitors a dynamic mix of urban culture, entertainment, and natural beauty. Known as the entertainment capital of the world, L.A. is famous for its Hollywood glamour, beaches, and diverse neighborhoods.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "Tokyo, Japan",
    description:
    "Tokyo is a city forever reaching into the future, pushing the boundaries of what's possible on densely populated, earthquake-prone land, and building ever taller, sleeker structures..",  
     price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
