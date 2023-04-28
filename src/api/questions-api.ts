import axios from "axios"
import { IQuestion } from "../models"

const getQuestions = (): Promise<IQuestion[]> => {
  return axios.get('/questions').then(response => response.data)
}

const createQuestion = (question: IQuestion) => {
  return axios.post('/questions', question)
}

const updateQuestion = (id: string, content: string) => {
  return axios.patch(`/questions/${id}`, { content })
}

const deleteQuestion = (id: string) => {
  return axios.delete(`/questions/${id}`)
}

const questionsApi = {
  getQuestions, createQuestion, updateQuestion, deleteQuestion
}

export default questionsApi