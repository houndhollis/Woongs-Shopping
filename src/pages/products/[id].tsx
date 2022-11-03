import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import ProductDetail from "../../components/product/detail"
import { graphqlFetcher, QueryKey } from "../../queryClient"
import { GET_PRODUCT,Product } from "../../graphql/products"

const ProductDetailPage = () => {
  const { id } = useParams()

  const { data } = useQuery<Product>([QueryKey.PRODUCTS, id], 
    () =>
    graphqlFetcher(GET_PRODUCT, { id }),
  )
  if(!data) return null;
  
  return (
    <ProductDetail item={data} />
  )
}

export default ProductDetailPage