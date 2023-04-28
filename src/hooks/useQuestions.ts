import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from "../context/StoreContext";
import questionsApi from "../api/questions-api";
import { IQuestion } from "../models";

export default function useQuestions() {
  const { questions, setQuestions } = useContext(StoreContext)

  useEffect(() => {
    questionsApi.getQuestions().then(value => setQuestions(value))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addQuestion = (content: string) => {
    const newQuestion = { id: uuidv4(), content }
    setQuestions([...questions, newQuestion])
    questionsApi.createQuestion(newQuestion)
  }

  const updateQuestion = (item: IQuestion, newContent: string) => {
    const foundIndex = questions.findIndex(question => question.id === item.id)
    setQuestions([...questions.slice(0, foundIndex), {...item, content: newContent}, ...questions.slice(foundIndex + 1)])
    questionsApi.updateQuestion(item.id, newContent)
  }

  const deleteQuestion = (item: IQuestion) => {
    setQuestions(questions.filter(question => question.id !== item.id))
    questionsApi.deleteQuestion(item.id)
  }

  return { questions, addQuestion, updateQuestion, deleteQuestion }
}