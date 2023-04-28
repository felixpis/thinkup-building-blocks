import { IQuestion } from "./Question"

export interface IStep {
  id: string
  questions: IQuestion[]
}