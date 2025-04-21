import React from "react";
import { Link } from "react-router-dom";
import BookDetail from "../pages/BookDetail";

const Book = ({ manhwa }) => {
  return (
    <Link to={`/bookDetail/${manhwa.id}`} className="flex flex-col gap-2">
      <img
        src={manhwa.coverImage}
        alt={manhwa.title}
        className="w-auto h-full lg:h-full lg:w-auto object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold dark:text-white">{manhwa.title}</h2>
      <p className="text-gray-500 dark:text-gray-400">{manhwa.description}</p>
      <p className="text-gray-500 dark:text-gray-400">
        Author: {manhwa.author}
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Status: {manhwa.status}
      </p>
    </Link>
  );
};

export default Book;
