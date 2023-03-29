import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const useFetchData = () => {

    const QueryData = useQuery(["FetchAllQuestion"],()=>{
        return axios.get(`http://localhost:3000/Questions`)
    },
      {
        refetchOnWindowFocus:false
      }
    )

   return QueryData



}

export default useFetchData
