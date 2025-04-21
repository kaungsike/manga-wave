import React from "react";
import { useParams } from "react-router-dom";
import Container from "../template/Container";
import BreadCrumb from "../template/BreadCrumb";
import useManhwaStore from "../store/useManhwaStore";
import Sumarry from "../template/Sumarry";


const BookDetail = () => {
  const { id } = useParams();

  const {manhwaDatas} = useManhwaStore();

  const currentBook = manhwaDatas.find((manhwa) => manhwa.id == id);

  return (
    <section>
      <Container>
        <div>
            <BreadCrumb currentPage={`Book Details`}/>
            <Sumarry currentBook={currentBook}/>
        </div>
      </Container>
    </section>
  );
};

export default BookDetail;
