import React, { Fragment, useState } from 'react'
import {useSelector} from "react-redux"
import "./QuizQuestion.css"
import useFetch from '../Hooks/useFetch'
import Choice from "./Choice"
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';



const QuizQuestion = ({pageNum}) => {

    // A Custom Query Hook To Fetch Data From Api
    const {isLoading,error,data,} = useFetch(pageNum)

    const Data = data?.data[0]

  return (
    <>

        <div className='Question-Wrapper' >
          {
            isLoading ?  <Skeleton animation="wave" style={{width:"400px",height:"70px",marginBottom:"5px"}} /> :
            <span>{Data?.Question+ "?"}</span>
          }
        </div>

       {
          isLoading ? 
              <>
                <Skeleton animation="wave" style={{width:"400px",height:"70px",marginBottom:"5px"}} />
                <Skeleton animation="wave" style={{width:"400px",height:"70px",marginBottom:"5px"}}  />
                <Skeleton animation="wave" style={{width:"400px",height:"70px",marginBottom:"5px"}} />
                <Skeleton animation="wave" style={{width:"400px",height:"70px",marginBottom:"5px"}} />
              </>
          :
          
          
          data?.data.map((item,index)=>{
             return (
                <Fragment key={index} >
                 {
                    item?.Choices.map((choice,index)=>{
                        return (
                            <Choice
                             key={index}
                             Choice={choice}
                             Answer={item.Answer}
                            />
                        )
                    })
                 }
                 </Fragment>
             )
            
          })
       }

    </>
  )
}

export default QuizQuestion
