import React, { Fragment, useState } from "react";
import data from "./Data/data.json";

const MockUp = () => {
  const [originalData] = useState(data);
  const [product, setProduct] = useState(data);
  const [check, setCheck] = useState(false);

  const category = [];
  product.forEach((item) => {
    if (!category.includes(item.category)) {
      category.push(item.category);
    }
  });

  const handleStockShow = (e) => {
    setCheck(e.target.checked);

    if (e.target.checked) {
      const res = originalData.filter((item) => item.stocked);
      setProduct(res);
    } else setProduct(originalData);
  };

  const searchProduct = (text) => {
    const searchTxt = text.target.value.trim();
    // console.log(product);
    let filtered = originalData;
    if (!searchTxt.length > 0) {
      filtered = originalData;
    } else {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTxt.toLowerCase())
      );
    }
    if (!check) {
      filtered = filtered;
    } else {
      filtered = filtered.filter((item) => item.stocked);
    }

    setProduct(filtered);
  };

  // console.log(product);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <h2>Mock Up</h2>

      <input
        placeholder="search"
        className="search-box"
        onChange={(text) => searchProduct(text)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBlock: 20,
          fontSize: 15,
        }}
      >
        <input type="checkbox" checked={check} onChange={handleStockShow} />
        <label style={{ marginLeft: "10px" }}>Show only stocked data</label>
      </div>
      <table
        style={{
          borderCollapse: "collapse",
          width: "350px",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#4C585B",
              textAlign: "center",
              color: "wheat",
              borderBottom: "1px solid black",
            }}
          >
            <th style={{ padding: "8px", borderRight: "1px solid black" }}>
              Name
            </th>
            <th style={{ padding: "8px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {category.map((category, categoryIndex) => (
            <Fragment key={categoryIndex}>
              <tr
                style={{
                  backgroundColor: "#4C585B",
                  color: "wheat",
                  fontWeight: "bold",
                }}
              >
                <td
                  colSpan={2}
                  style={{
                    padding: "8px",
                    fontWeight: "bold",
                    textAlign: "center",
                    border: "1px solid black",
                  }}
                >
                  {category}
                </td>
              </tr>
              {product.map(
                (item, itemIndex) =>
                  item.category === category && (
                    <tr key={itemIndex}>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid red",
                        }}
                      >
                        {item.name}
                      </td>
                      <td
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid red",
                          borderLeft: "1px solid red",
                        }}
                      >
                        {item.price}
                      </td>
                    </tr>
                  )
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MockUp;
