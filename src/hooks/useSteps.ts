import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from "../context/StoreContext";
import stepsApi from "../api/steps-api";
import { IStep, IQuestion } from "../models";

export default function useSteps() {
  const { steps, setSteps } = useContext(StoreContext)

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
    const foundIndex = steps.findIndex(s => s.id === step.id)
    setSteps([...steps.slice(0, foundIndex), {...step, questions }, ...steps.slice(foundIndex + 1)])
    stepsApi.updateStep(step.id, questions.map(q => q.id))
  }

  const deleteStep = (step: IStep) => {
    setSteps(steps.filter(s => s.id !== step.id))
    stepsApi.deleteStep(step.id)
  }

  return { steps, addStep, updateStep, deleteStep }
}