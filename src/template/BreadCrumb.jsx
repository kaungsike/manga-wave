import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";

const BreadCrumb = ({currentPage}) => {
  return (
    <Breadcrumbs fullWidth className="dark:text-white mt-3 bg-white dark:bg-blue-gray-900 p-0">
      <a href="/" className="opacity-60 dark:text-white hover:opacity-100 hover:">
        Home
      </a>

      <a className="dark:text-white">{currentPage}</a>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
