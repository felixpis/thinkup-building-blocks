import React, { createContext, useState } from 'react'
import { IStep, IQuestion } from '../models'

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
  const [initialSteps, setSteps] = useState<IStep[]>([])
  const steps = mapQuestionsToSteps(initialSteps, questions)

  return <StoreContext.Provider value={{ questions, setQuestions, steps, setSteps }}>{children}</StoreContext.Provider>
}

const mapQuestionsToSteps = (steps: IStep[], questions: IQuestion[]) => {
  const questionsObj = mapQuestionsToObj(questions)
  return steps.map(step => {
    const mappedQuestions: IQuestion[] = (step.questions as any as string[]).map(id => ({ id, content: questionsObj[id]}))
    return {...step, questions: mappedQuestions}
  })
}

const mapQuestionsToObj = (questions: IQuestion[]): Record<string, string> => {
  return questions.reduce((prev, current) => {
    prev[current.id] = current.content
    return prev
  }, {} as Record<string, string>)
}

export default StoreProvider
