import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/productAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const createProduct = (e) => {
    e.preventDefault();
    const new_product = {
      id: shortid.generate(),
      name: name,
      price: price,
      description: description,
      quantity: quantity,
      image: image,
    };
    console.log(new_product)
    dispatch(addProduct(new_product));
    history.push("/product");
  };

  const style = {backgroundColor: '#6200ea', color :" white", marginLeft : "95%",marginTop: "15px" }

  return (
    
    <div className="card border-0 shadow">
      <div className="card-header">
      <button style ={style} onClick={() => history.push('/product')} >X</button><h5> Add Product</h5></div>
      <div className="card-body">
        <form onSubmit={(e) => createProduct(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Your Price"
              value={price }
              onChange={(e) => setPrice(e.target.value)}
              required
              step="any"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Description"
              value={description }
              onChange={(e) => setdescription (e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Quantity "
              value={quantity }
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input type="file"
              onChange={(e) => setImage(e.target.value)} />
        <img src={image}/>
          </div>
          <button className="btn btn-primary" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
