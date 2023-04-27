import axios from "axios"
import { IQuestion } from "../models/Question"
import { IStep } from "../models/Step"

const getSteps = (): Promise<IStep[]> => {
  return axios.get('/steps').then(response => response.data)
}

const createStep = (step: IStep) => {
  return axios.post('/steps', step)
}

const updateStep = (id: string, questions: IQuestion[]) => {
  return axios.patch(`/steps/${id}`, { questions })
}

const deleteStep = (id: string) => {
  return axios.delete(`/steps/${id}`)
}

const stepsApi = {
  getSteps, createStep, updateStep, deleteStep
}

export default stepsApi