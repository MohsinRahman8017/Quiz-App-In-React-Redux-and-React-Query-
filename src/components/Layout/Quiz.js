import React from 'react'
import { useState } from 'react'
import useFetchData from "../Hooks/useFetchData"
import {isDivEnabled,TotalScore,RemoveItem} from "../Redux/QuizSlice"
import { useDispatch ,useSelector} from 'react-redux';
import "./Quiz.css"
import Button from '@mui/material/Button';
import QuizQuestion from "../Quiz Questions/QuizQuestion"
import Score from "../Score/score"


const Quiz = () => {

   // Initializing Dipatch from Redux
   const dispatch = useDispatch()

   const isEnabled = useSelector((state)=> state.Quiz.isEnabled)

   // A State To Manage Page Number
   const[Page,setpage] = useState(1)

   // This State Will Handle Whether To Show Questions Or Score
   const [PageType,setPageType] = useState("Quiz")

   // This Custom Hook will Iterate All Data Of Question
   const {isLoading,data} = useFetchData()

   // Will Show The Length Of Data
   const Length = data?.data.length

   // A Function To Handle Page 
   const HandleNext = () => {
     // Updating Page Value
     setpage(prev => prev + 1)
     // Setting True Value to Enable Div Element
     dispatch(isDivEnabled(true))
   }

   // This Function will handle Page type to show score  
   const HandleFinish = () => {
    setPageType("TotalScore")
   }

   const Retry = () => {

    dispatch(RemoveItem(null))

    setPageType("Quiz")

    setpage(1)
    
   }
   
  return (  

    <div className='Quiz-Body' >
      <div className='Quiz-Header' >
          <h2>Quiz Application</h2>
      </div>

      <div className='Quiz-Questions-Body' >
        {
          PageType == "Quiz" ? <QuizQuestion pageNum={Page} /> : <Score/>
        }
      </div>

      <div className='Quiz-Footer'>
       <div> 

         <span>
           {
             isLoading ? <span>Loading...</span> : 
             Page + "/" + Length
            }
          </span>
       </div>
       <div>
        {          
          PageType == "Quiz" ? <Button variant={isEnabled ? "outlined" :"contained"} sx={{fontSize:"13px"}} disabled={isEnabled}  onClick={Page == Length ? HandleFinish : HandleNext}>{Page == Length ? "Finish" : "Next"}</Button> :
          <Button variant='contained' sx={{fontSize:"13px"}} onClick={Retry} >Retry</Button>         
        }
       </div>
      </div>

    </div>
  )
}

export default Quiz
