import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const useFetch = (page) => {
    
    const QueryData = useQuery(["FetchQuestion",page],()=>{
        return axios.get(`http://localhost:3000/Questions?_limit=1&_page=${page} `)
    },
     {
        refetchOnWindowFocus:false
      }
      )

    return QueryData
   
 }

export default useFetch
