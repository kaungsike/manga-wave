import React from "react";
import Container from "../template/Container";
import Book from "../utils/Book";
import useManhwaStore from "../store/useManhwaStore";

const BookSection = () => { 

  const {manhwaDatas} = useManhwaStore();

  return (
    <section className="mt-5 pb-2">
      <Container>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
          {manhwaDatas.map((manhwa) => (
            <Book manhwa={manhwa} key={manhwa.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BookSection;
