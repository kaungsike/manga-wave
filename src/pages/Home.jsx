import React from "react";
import Container from "../template/Container";
import CategorySection from "../components/CategorySection";
import BookSection from "../components/BookSection";

const Home = () => {

  return (
    <section>
          <CategorySection/>
          <BookSection/>
    </section>
  );
};

export default Home;
