import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// import { getTodos, postTodo } from '../my-api'

export const getClient = (() => {
   let client : QueryClient | null = null;
   return () => {
     if(!client) client = new QueryClient()
     return client
   }
})()

type AnyOBJ = {[key:string]:any}

const BASE_URL = 'https://fakestoreapi.com'

export const fetcher = async ({
  method,
  path,
  body,
  params,
}:{
  method: 'GET' | 'POST' | 'PUSH' | 'DELETE' | 'PATCH'
  path:string
  body?: AnyOBJ
  params?: AnyOBJ
}) => {
  try {
   const url = `${BASE_URL}${path}`
   const fetchOptions: RequestInit = {
     method,
     headers: {
       'Content-type' : 'application/json',
       'Access-Control-Allow-Origin': BASE_URL
     }
   }
   const res = await fetch(url, fetchOptions)
   const json = await res.json()
   return json
  } catch (err) {
    console.error(err)
  } 
}

export const QueryKey = {
  PRODUCTS : 'PRODUCTS',
}