import React from "react";
import axios from "axios";
import { Loading } from "./components";

import "./scss/index.scss";

export const App = () => {
  const [results, setResults] = React.useState() as any[];
  const [products, setProducts] = React.useState() as any[];
  const [sortedField, setSortedField] = React.useState("");
  const [sortDirection, setSortDirection] = React.useState("");

  const getData = async () => {
    const { data } = await axios("./data.json");
    setResults(data.widget.data);
    setProducts(data.widget.data.offers);
  };

  React.useEffect(() => {
    getData();
  }, []);
  // console.log("Results STATE", results);

  if (!results || !products) {
    return <Loading />;
  }

  const sortData = () => {
    if (sortedField && sortedField === "model") {
      if (sortDirection === "asc") {
        products.sort((a: any, b: any) => (a.model > b.model ? 1 : a.model < b.model ? -1 : 0));
      } else if (sortDirection === "desc") {
        products.sort((a: any, b: any) => (a.model > b.model ? -1 : a.model < b.model ? 1 : 0));
      } else {
        console.log("sorting model default");
      }
    }
    if (sortedField && sortedField === "offer.price") {
      if (sortDirection === "asc") {
        products.sort((a: any, b: any) => a.offer.price - b.offer.price);
      } else if (sortDirection === "desc") {
        products.sort((a: any, b: any) => b.offer.price - a.offer.price);
      } else {
        console.log("sorting offer.price default");
      }
    }
  };

  const handleSort = (label: string) => () => {
    setSortedField(label);
    sortDirection === ""
      ? setSortDirection("asc")
      : sortDirection === "asc"
      ? setSortDirection("desc")
      : setSortDirection("");
    sortData();
  };

  const getSortIcon =
    sortDirection === "asc" ? (
      <i className="las la-sort-up"></i>
    ) : sortDirection === "desc" ? (
      <i className="las la-sort-down"></i>
    ) : (
      <i className="las la-sort"></i>
    );

  console.log("sortedField", sortedField);
  console.log("sortDirection", sortDirection);
  console.log("products", products);

  const tableHeaderRows = (
    <tr>
      <th className="th-merchant">Merchant</th>
      <th className="th-product">
        <button type="button" onClick={handleSort("model")}>
          Product
          {sortedField === "model" ? getSortIcon : <i className="las la-sort"></i>}
        </button>
      </th>
      <th className="th-price">
        <button type="button" onClick={handleSort("offer.price")}>
          Price
          {sortedField === "offer.price" ? getSortIcon : <i className="las la-sort"></i>}
        </button>
      </th>
      <th className="th-currency">Currency</th>
      <th>Affiliate Link</th>
    </tr>
  );

  const tableBodyRows = products.map((offer: any) => {
    return (
      <tr>
        <td>
          <img src={offer.merchant.logo_url} />
          {offer.merchant.name}
        </td>
        <td>{offer.model}</td>
        <td>{offer.offer.price}</td>
        <td>
          {offer.offer.currency_iso} ({offer.offer.currency_symbol})
        </td>
        <td>
          <a href={offer.offer.link}>{offer.offer.merchant_link_text}</a>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="responsive-table">
            <table id="products" className="table">
              <thead>{tableHeaderRows}</thead>
              <tbody>{tableBodyRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
