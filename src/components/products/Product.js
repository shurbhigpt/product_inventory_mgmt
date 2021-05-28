import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteProduct } from "../reducers/productAction";
import { useDispatch } from "react-redux";

const Product = ({ product, selectAll }) => {
  const dispatch = useDispatch();
  const { name, price, description,quantity,image, id } = product;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
      </td>
      <td>{price}</td>
      <td>{description}</td>
      <td>{quantity}</td>
      <td>{image}</td>
      <td className="actions">
        <Link to={`/products/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span
          className="material-icons  text-danger"
          onClick={() => dispatch(deleteProduct(id))}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Product;
