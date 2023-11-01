import React from "react";
const Boxs = () => {
  const boxs = [
    {
      title: "free shipping",
      parag: "free shipping for orders over 120$",
    },
    {
      title: "refund",
      parag: "within 30 days for an exchange",
    },
    {
      title: "support",
      parag: "24 hours a day 7 days a week",
    },
    {
      title: "payment",
      parag: "pay with multiple creadit cards",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 capitalize my-6">
      {boxs.map((box, index) => (
        <div key={index} className="text-center rounded p-2 hover:bg-gray-200 duration-300 ease-in">
          <h6 className="font-semibold">{box.title}</h6>
          <p className="font-light text-sm">{box.parag}</p>
        </div>
      ))}
    </div>
  );
};

export default Boxs;
