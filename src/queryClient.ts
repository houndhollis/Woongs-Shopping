import { QueryClient } from 'react-query'
import { request } from 'graphql-request'; 
import { RequestDocument } from 'graphql-request';
// import { getTodos, postTodo } from '../my-api'

export const getClient = (() => {
   let client : QueryClient | null = null;
   return () => {
     if(!client) client = new QueryClient({
       defaultOptions:{
         queries:{
           cacheTime: 1000 * 60 * 60 * 24,
           staleTime: 1000 * 60,
           refetchOnMount : false,
           refetchOnReconnect : false,
           refetchOnWindowFocus : false,
         }
       }
     })
     return client
   }
})()

type AnyOBJ = {[key:string]:any}

const BASE_URL = '/'

export const restFetcher = async ({
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
   let url = `${BASE_URL}${path}`
   const fetchOptions: RequestInit = {
     method,
     headers: {
       'Content-type' : 'application/json',
       'Access-Control-Allow-Origin': BASE_URL
     }
   }
  if (params) {
    const searchParams = new URLSearchParams(params)
    url += '?' + searchParams.toString()
  }
  if (body) fetchOptions.body = JSON.stringify(body)

   const res = await fetch(url, fetchOptions)
   const json = await res.json()
   return json
  } catch (err) {
    console.error(err)
  } 
}

export const graphqlFetcher = (query: RequestDocument , variables = {}) => request
(BASE_URL,query,variables)

export const QueryKey = {
  PRODUCTS : 'PRODUCTS',
}