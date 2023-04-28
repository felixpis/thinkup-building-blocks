import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from "../context/StoreContext";
import stepsApi from "../api/steps-api";
import { IStep, IQuestion } from "../models";

export default function useSteps() {
  const { steps, questions, setSteps } = useContext(StoreContext)

  useEffect(() => {
    stepsApi.getSteps().then(value => setSteps(value))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addStep = () => {
    const newStep: IStep = { id: uuidv4(), questions: []}
    setSteps([...steps, newStep])
    stepsApi.createStep(newStep)
  }

  const updateStep = (step: IStep, questions: IQuestion[]) => {
    const questionIds = questions.map(q => q.id)
    const foundIndex = steps.findIndex(s => s.id === step.id)
    setSteps([...steps.slice(0, foundIndex), {...step, questions: questionIds as any as IQuestion[] }, ...steps.slice(foundIndex + 1)])
    stepsApi.updateStep(step.id, questions.map(q => q.id))
  }

  const deleteStep = (step: IStep) => {
    setSteps(steps.filter(s => s.id !== step.id))
    stepsApi.deleteStep(step.id)
  }

  return { steps: mapQuestionsToSteps(steps, questions), addStep, updateStep, deleteStep }
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