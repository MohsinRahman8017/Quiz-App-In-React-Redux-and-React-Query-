import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isEnabled:true,
   Score:[]
}

export const QuizSlice = createSlice({
  name: 'Quiz',
  initialState,
  reducers: {
    
    // A Function To Take True or False Value To Activate or disActivate Div  Click Element
    isDivEnabled : (state,action) => {
        state.isEnabled = action.payload
    },

    // A Function To Take Question Status Correct or Incrorrect
    TotalScore : (state,action) => {
       state.Score.push(action.payload)
    },

    RemoveItem : (state,action) => {
      state.isEnabled = true
      state.Score = []
    
    }

  },
})

// Action creators are generated for each case reducer function
export const {isDivEnabled,TotalScore,RemoveItem} = QuizSlice.actions

export default QuizSlice.reducer