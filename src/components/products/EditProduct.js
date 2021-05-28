import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../reducers/productAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.product);
  const [name, setName] = useState("");
  const [description , setdescription ] = useState("");
  const [price, setPrice] = useState("");
  const [quantity  , setQuantity  ] = useState("");
  const [image , setImage ] = useState("");

  useEffect(() => {
    debugger
    if (product != null) {
      setName(product.name);
      setPrice(product.price);
      setdescription(product.description);
      setQuantity(product.quantity);
      setImage(product.image);
    }
    dispatch(getProduct(id));
  }, [product]);

  const onUpdateProduct = (e) => {
    e.preventDefault();

    const update_product = Object.assign(product, {
      name: name,
      price : price ,
      description: description,
      quantity: quantity,
      image:image,
    });

    dispatch(updateProduct(update_product));
    history.push("/product")
  };
    const style = {backgroundColor: '#6200ea', color :" white", marginLeft : "95%",marginTop: "15px" }

  return (
    <div className="card border-0 shadow">
      <div className="card-header">
      <button style ={style} onClick={() => history.push('/product')} >X</button><h5> Update Product</h5></div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateProduct(e)}>
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
              step="any"
              required
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
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
