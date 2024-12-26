import React from "react";

const Lists = () => {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  return (
    <div>
      <ul>
        {products?.map((item) => (
          <li
            key={item?.id}
            style={{ color: item?.isFruit ? "magenta" : "darkgreen" }}
          >
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
