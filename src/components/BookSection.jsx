import React from "react";
import Container from "../template/Container";
import Book from "../utils/Book";

const BookSection = () => {
  const manhwaList = [
    {
      title: "Solo Leveling",
      coverImage:
        "https://d6fmx7z4dqmn1.cloudfront.net/Unholy%20Blood%20Vol%201%20comic%20cover.webp",
      genre: ["Action", "Fantasy"],
      author: "Chugong",
      status: "Completed",
      rating: 9.2,
      releaseYear: 2018,
      chapters: 179,
    },
    {
      title: "The Beginning After The End",
      coverImage:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boku_girl_vol1.png",
      genre: ["Action", "Fantasy", "Isekai"],
      author: "TurtleMe",
      status: "Ongoing",
      rating: 9.1,
      releaseYear: 2018,
      chapters: 190,
    },
    {
      title: "Omniscient Reader's Viewpoint",
      coverImage:
        "https://images.squarespace-cdn.com/content/v1/571abd61e3214001fb3b9966/d7268a8a-e529-4280-b8ab-5d2dd3ce9fd9/Goodbye+Eri+English+Cover.jpg",
      genre: ["Action", "Drama", "Fantasy"],
      author: "Sing N Song",
      status: "Ongoing",
      rating: 9.0,
      releaseYear: 2020,
      chapters: 180,
    },
    {
      title: "Tower of God",
      coverImage:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/01/eleceed.jpeg",
      genre: ["Adventure", "Fantasy", "Mystery"],
      author: "SIU",
      status: "Ongoing",
      rating: 8.8,
      releaseYear: 2010,
      chapters: 550,
    },
    {
      title: "Noblesse",
      coverImage:
        "https://a.storyblok.com/f/178900/960x1440/14d9689a9d/returners-magic-vol-1.jpg/m/filters:quality(95)format(webp)",
      genre: ["Action", "Supernatural", "School"],
      author: "Son Jeho",
      status: "Completed",
      rating: 8.5,
      releaseYear: 2007,
      chapters: 544,
    },
  ];

  return (
    <section className="mt-5 pb-2">
      <Container>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
          {manhwaList.map((manhwa, index) => (
            <Book manhwa={manhwa} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BookSection;
