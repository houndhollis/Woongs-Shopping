import { Product } from "../../types";
import { Link } from "react-router-dom";

const ProductItem = ({
 category,
 image,
 price,
 id,
 rating,
 title,
}:Product) => (
  <li className="product-item">
    <Link to ={`/products/${id}`}>
      <p className="product-item__category">{category}</p>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={image}/>
      <span className="product-item__price">${price}</span>
      <span className="product-item__rating">{rating.rate}</span>
    </Link>
  </li>
)

export default ProductItem