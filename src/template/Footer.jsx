import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <section className="mt-auto py-3 border-t border-t-gray-500">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">WebToon</h2>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-white transition duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-white transition duration-300"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
