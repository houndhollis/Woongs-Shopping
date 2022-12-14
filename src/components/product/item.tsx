import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";

const ProductItem = ({
 id,
 imageUrl,
 price,
 title,
 description,
 createAt,
}:Product) => (
  <li className="product-item">
    <Link to ={`/products/${id}`}>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={imageUrl}/>
      <span className="product-item__price">${price}</span>
    </Link>
    <button className="product-item__add-cart">담기</button>
  </li>
)

export default ProductItem