import "./score.css";
import {useSelector} from 'react-redux';
import React from 'react'

const Score = () => {

    const Score = useSelector((state)=> state.Quiz.Score)

    const Result = Score.filter((item)=>{
        return item == true
    })


  return (
    <div className="Score-Wrapper" >
       <span style={{fontSize: "20px",fontFamily: 'Phagspa',fontWeight: "600"}} >
        Your total score is
        </span>
       <span style={{fontSize: "50px",fontFamily: 'Sans-Serif'}}>{Result.length}</span>
       <span style={{fontSize: "16px",fontFamily: 'Sans-Serif'}}>{Result.length} correct out of {Score.length}</span>
    </div>
  )
}

export default Score
