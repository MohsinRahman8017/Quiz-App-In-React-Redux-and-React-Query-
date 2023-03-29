import { configureStore } from '@reduxjs/toolkit'
import QuizSlice from "./components/Redux/QuizSlice"

export const store = configureStore({
  reducer: {
    Quiz : QuizSlice
  },
})

