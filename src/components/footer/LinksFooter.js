import React from "react";

const LinksFooter = () => {
  const quickLinks = [
    "home",
    "about",
    "services",
    "contact",
    "terms & conditions",
  ];
  const resources = [
    "our team",
    "job post",
    "job details",
    "help",
    "privacy & policy",
  ];
  const supports = ["help", "FAQ", "contact"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {/* links footer */}
      <div>
        <h6 className=" text-sky-800 text-xl mb-2 font-medium">quick links</h6>
        <ul>
          {quickLinks.map((quick, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-base text-black hover:text-gray-500 hover:ease-in hover:duration-300"
              >
                {quick}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* box 2 */}
      <div>
        <h6 className="text-sky-800 text-xl mb-2 font-medium">resources</h6>
        <ul>
          {resources.map((resource, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-base text-black hover:text-gray-500 hover:ease-in hover:duration-300"
              >
                {resource}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* box 3 */}
      <div>
        <h6 className="text-sky-800 text-xl mb-2 font-medium">support</h6>
        <ul>
          {supports.map((support, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-base text-black hover:text-gray-500 hover:ease-in hover:duration-300"
              >
                {support}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* box 4 */}
      <div>
        <h6 className="text-sky-800 text-xl mb-2 font-medium">talk to us</h6>
        <p>
          find a location nearest you see{" "}
          <a className="underline text-red-400 text-base">our stores</a>
        </p>
        <p className="font-semibold text-lg">+212 612734354</p>
        <span className="lowercase">e-shadow007@shadow.com</span>
      </div>
    </div>
  );
};

export default LinksFooter;
