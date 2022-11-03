import { useQuery } from "react-query"
import ProductItem from "../../components/product/item"
import GET_PRODUCTS, { Products } from "../../graphql/products"
import { graphqlFetcher, QueryKey } from "../../queryClient"

const ProductList = () => {
  const { data } = useQuery<Products>(QueryKey.PRODUCTS, ()=>
  graphqlFetcher(GET_PRODUCTS))

  return (
    <div>
      <h2>상품 목록</h2>
      <ul className="products">
       {data?.products?.map(product => (
         <ProductItem {...product} key = {product.id}/>
       ))}
      </ul>
    </div>
  )
}

export default ProductList