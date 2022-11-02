import ProductDetail from "../../components/product/detail"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { fetcher, QueryKey } from "../../queryClient"
import { Product } from "../../types"

const ProductDetailPage = () => {
  const { id } = useParams()

  const { data } = useQuery<Product>([QueryKey.PRODUCTS, id], 
    () =>
    fetcher({
      method:'GET',
      path:`/products/${id}`,
    }),
  )
  if(!data) return null;
  
  return (
    <ProductDetail item={data} />
  )
}

export default ProductDetailPage