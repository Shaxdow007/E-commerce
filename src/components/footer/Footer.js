import React from "react";
import LinksFooter from "./LinksFooter";

const Footer = () => {
  return (
    <footer className="mt-6 bg-gray-200">
      <div className="container mx-auto p-6 capitalize">
        <LinksFooter />
        <div className="mt-5 text-center">copyrigth &copy; by shadow007</div>
      </div>
    </footer>
  );
};

export default Footer;
