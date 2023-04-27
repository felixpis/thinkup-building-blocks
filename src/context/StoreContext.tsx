import React, { createContext, useState } from 'react'
import { IStep } from '../models/Step'
import { IQuestion } from '../models/Question'

interface Props {
  steps: IStep[]
  questions: IQuestion[]
  setQuestions: (questions: IQuestion[]) => void
  setSteps: (steps: IStep[]) => void
}

export const StoreContext = createContext<Props>({
  steps: [], questions: [],
  setQuestions: (value: IQuestion[]) => {},
  setSteps: (value: IStep[]) => {}
})

const StoreProvider = ({ children }: { children: React.ReactElement }) => {
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [steps, setSteps] = useState<IStep[]>([])

  return <StoreContext.Provider value={{ questions, setQuestions, steps, setSteps }}>{children}</StoreContext.Provider>
}

export default StoreProvider
