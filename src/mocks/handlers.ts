import { graphql } from 'msw'
import { QueryKey } from '../queryClient'
import { v4 as uuidv4 } from 'uuid';
import GET_PRODUCTS, { GET_PRODUCT } from '../graphql/products'


const mockProducts = Array.from({ length:20 }).map((_, i)=>({
   id:uuidv4(),
   imageUrl: `https://placeimg.com/200/150/${i+1}`,
   price:50000,
   title:`임시상품${i+1}`,
   desciptions:`임시상품내용${i+1}`,
   createdAt : new Date(1645735501883 + i * 1000 * 60 * 60 * 10).toString(),
}))

export const handlers = [

  graphql.query(GET_PRODUCTS,(req,res,ctx) => {
    return res(
      ctx.data({
        products: mockProducts
      }),
    )
  }),
  graphql.query(GET_PRODUCT,(req,res,ctx)=>{
    return res(ctx.data(mockProducts[0]))
  })
]