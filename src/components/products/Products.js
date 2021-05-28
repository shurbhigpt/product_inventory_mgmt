import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import {
  selectAllProduct,
  clearAllProduct,
  deleteAllProduct,
  searchByName,
} from "../reducers/productAction";

const Products = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const [data, setData] = useState([]);

  var products = useSelector((state) => state.product.products);
  useEffect(() => {
    if (products) {
      setData(products);
    }
  })
  const selctedProducts = useSelector(
    (state) => state.product.selectedProducts
  );

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllProduct(products.map((product) => product.id)));
    } else {
      dispatch(clearAllProduct());
    }
  }, [selectAll]);
  console.log(products);
 
  const handleSearch = (e) => {
    debugger
    e.preventDefault();
    let input = e.target.value;
    let arr = [];
    if (input) {
      arr = products.filter(val => {
        if (val.name.toLowerCase().includes(input.toLowerCase()) || val.name.toLowerCase().includes(input.toLowerCase())) {
          return val;
        }
      })
      setData(arr);
    } else {
      setData([])
    }
  }

  return (
    <div>
      <div className="field is-grouped">
        <div >
          <input style={{ width: "22%", marginLeft: "76%" }}
            onClick={(e) => handleSearch(e)}
            placeholder="Search by Name/Price/Quantity"
            type="text"
          />
        </div>
      </div>
      {selctedProducts.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllProduct())}
        >
          delete all
        </button>
      ) : null}
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <Product product={product} key={product.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
