import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
    "India is a vast country with a rich cultural heritage, diverse landscapes, and numerous attractions. Here are some of the top places to visit in India: 1.Taj mahal(Agra) , 2.Jaipur (Rajasthan), 3.Varanasi (Uttar Pradesh), 4. Kerala Backwaters, 5.Goa, 6.Ranthambore National Park(Rajasthan), 7. Mumbai (Maharashtra), 8.Leh-Ladakh, 9.Mysore(Karnataka),10.Hampi(Karnataka), 11.Darjeeling(West Bengal),12.Rishikesh (Uttarakhand), 13.Andaman and Nicobar Islands,14.Ajanta and Ellora Caves (Maharashtra),15.Golden Temple (Amritsar,Punjab)",

  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
    "The U.S. is home to a wide range of diverse landscapes, cities, and attractions. Here are some of the top places to visit in the United States:1. New York City, New York, 2. Grand Canyon, Arizona,3. Yellowstone National Park (Wyoming, Montana, Idaho),4. Las Vegas, Nevada ,5. San Francisco, California 6. Hawaii 7. Washington, D.C,8. Orlando, Florida,9. Chicago, Illinois,10. New Orleans, Louisiana,11. Los Angeles, California,12. Miami, Florida,13. Nashville, Tennessee,14. Yosemite National Park, California,15. Sedona, Arizona"
  
    
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Japan is a country known for its rich cultural heritage, advanced technology, and stunning natural beauty. Here are some of the top places to visit in Japan: 1. Tokyo,2. Kyoto,3. Mount Fuji,4. Osaka,5. Nara,6. Hokkaido,7. Hiroshima,8. Okinawa,9. Nikko,10. Kanazawa,11. Kamakura,12. Fukuoka,13. Takayama,14. Nagoya,15. Matsumoto",
    // author: "Someone",
    // date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
