import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import "./Choice.css"
import { useDispatch ,useSelector} from 'react-redux';
import {isDivEnabled,TotalScore} from "../Redux/QuizSlice"
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const Choice = ({Choice,Answer}) => {

  // initializing dispatch from Redux
  const dispatch = useDispatch()
  const isEnabled = useSelector((state)=> state.Quiz.isEnabled)

  // This ref will get the inner text of span tag
  const ChoiceRef = useRef()
  
  // This ref will Toggle The Class either Success or Error
  const ClassRef = useRef()

  const InitialState = isEnabled == true && null

  // This State Will Hold The Selected Answer
  const [SelectedChoice,setChoice] = useState(InitialState);

  // This Function Will Get The Inner Text of Span Element and Set It To Selected Choice
  const HandleAnswer =  () => {  

    let Value = ChoiceRef.current.textContent

    setChoice(Value)

    dispatch(isDivEnabled(false))

    Value == Answer ? dispatch(TotalScore(true)) : dispatch(TotalScore(false))

    Value == Answer ? ClassRef.current.className = "Choice-Wrapper success" :  ClassRef.current.className = "Choice-Wrapper error";  
    
  }

  // Here i am Checking Whether the Div is Active or Not if  is not Active Execute it 

  if(!isEnabled){
    // Now I am doing what is Assigning  Success Class To The Div 
    // by Comparing Choice Options with Answer
    if(Choice == Answer) ClassRef.current.className = "Choice-Wrapper success" 
  }

  
  return (
    <div className="Choice-Wrapper" ref={ClassRef}  onClick={isEnabled ? HandleAnswer : null} >    
       <span ref={ChoiceRef} value={Choice} >{Choice}</span>
       {
        !isEnabled && Choice == Answer ? <CheckIcon sx={{background:"green",color:"white",borderRadius:"50px",padding:"2px"}} />  : null
       }

       {
        Choice == Answer ? null :!isEnabled && Choice == SelectedChoice ? <ClearIcon sx={{background:"red",color:"white",borderRadius:"50px",padding:"2px"}} /> : null
       }
    </div>
  )
}

export default Choice
